import AnimatedDots from './AnimatedDots/AnimatedDots';

const LoadingMessage = () => {
  return (
    <section>
      <p>
        Trwa pobieranie danych{' '}
        <span>
          <AnimatedDots />
        </span>
      </p>
    </section>
  );
};

export default LoadingMessage;
