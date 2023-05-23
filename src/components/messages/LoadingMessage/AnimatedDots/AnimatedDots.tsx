import styles from './AnimatedDots.module.scss';

const AnimatedDots = () => {
  return (
    <>
      <span className={styles.dot}>.</span>
      <span className={`${styles.dot} ${styles.dot2}`}>.</span>
      <span className={`${styles.dot} ${styles.dot3}`}>.</span>
    </>
  );
};

export default AnimatedDots;
