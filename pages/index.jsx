import { useState } from 'react';
import styles from './index.module.scss';

const Counter = ({ count, id, resetCounter, incrementCounter }) => (
  <div className={styles.counter}>
    <div className={styles.count}>{count} </div>
    <div className={styles.button} onClick={() => incrementCounter(id)}>
      +
    </div>
    <div
      className={`${styles.button}+${styles.resetButton}`}
      onClick={() => resetCounter(id)}
    >
      RESET
    </div>
  </div>
);

export default function Home() {
  const [countersData, setCountersData] = useState([]);
  const [id, setId] = useState(0);

  const generateId = () => {
    setId(id + 1);
    return id;
  };

  const resetCounter = (id) => {
    const updatedCounters = countersData.map((data) => {
      if (data.id !== id) {
        return data;
      } else {
        return { ...data, count: 0 };
      }
    });
    setCountersData(updatedCounters);
  };

  const incrementCounter = (id) => {
    const updatedCounters = countersData.map((data) => {
      if (data.id !== id) {
        return data;
      } else {
        return { ...data, count: data.count + 1 };
      }
    });
    setCountersData(updatedCounters);
  };

  const addCounter = (id) => {
    setCountersData([
      ...countersData,
      {
        count: 0,
        id: generateId,
      },
    ]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={addCounter}>
        ADD COUNTER
      </div>
      <div className={styles.countersContainer}>
        {countersData.map((data) => (
          <Counter
            {...data}
            resetCounter={resetCounter}
            incrementCounter={incrementCounter}
          />
        ))}
      </div>
    </div>
  );
}
