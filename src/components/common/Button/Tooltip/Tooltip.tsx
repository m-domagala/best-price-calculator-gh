import styles from '../Button.module.scss';

function Tooltip({ message }: { message: string }) {
  return (
    <div className={styles.tooltipAnchor}>
      <p className={styles.tooltip}>{message}</p>
    </div>
  );
}

export default Tooltip;
