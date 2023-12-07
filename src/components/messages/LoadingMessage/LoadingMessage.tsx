import AnimatedDots from './AnimatedDots';
import { DATA_FETCHING_MESSAGE } from '../../../constants';

const LoadingMessage = () => {
  return (
    <section>
      <p>
        {DATA_FETCHING_MESSAGE}{' '}
        <span>
          <AnimatedDots />
        </span>
      </p>
    </section>
  );
};

export default LoadingMessage;
