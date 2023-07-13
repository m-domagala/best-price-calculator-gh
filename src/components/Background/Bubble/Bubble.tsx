import useBubble from './useBubble';
import { IBubble } from '../../../types';
import styles from './Bubble.module.scss';

function Bubble({ size, quarter }: IBubble) {
  const getRandomStyles = useBubble(quarter);

  return (
    <span
      className={`${styles.bubble} ${styles[size]}`}
      style={getRandomStyles()}
    />
  );
}

export default Bubble;
