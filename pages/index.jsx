import { useState } from 'react';
import styles from './index.module.scss';

const Counter = ({ count, resetCounter, incrementCounter }) => (
  <div className={styles.counter}>
    <div className={styles.count}>{count} </div>
    <div className={styles.button} onClick={incrementCounter}>
      +
    </div>
    <div
      className={`${styles.button}+${styles.resetButton}`}
      onClick={resetCounter}
    >
      RESET
    </div>
  </div>
);

export default function Home() {
  const [count, setCount] = useState(0);

  const resetCounter = () => {
    setCount(0);
  };

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.container}>
      <Counter
        count={count}
        resetCounter={resetCounter}
        incrementCounter={incrementCounter}
      />
    </div>
  );
}
