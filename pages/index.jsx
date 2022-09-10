import { useState } from 'react';
import styles from './index.module.scss';

const Counter = ({ count, setCount }) => (
  <div className={styles.counter}>
    <div className={styles.count}>{count} </div>
    <div className={styles.button} onClick={() => setCount(count + 1)}>
      +
    </div>
    <div
      className={`${styles.button}+${styles.resetButton}`}
      onClick={() => setCount(0)}
    >
      RESET
    </div>
  </div>
);

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}
