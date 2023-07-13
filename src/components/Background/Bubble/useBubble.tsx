import styles from './Bubble.module.scss';

const useBubble = (quarter: number) => {
  const getRandomInteger = (maxNumber: number) => {
    return Math.floor(Math.random() * (maxNumber + 1));
  };

  const getRandomDecimal = (maxNumber: number) => {
    return getRandomInteger(maxNumber * 10) / 10;
  };

  const getRandomPosition = () => {
    return `${getRandomInteger(49)}%`;
  };

  const getFloatAnimationType = () => {
    const randomNumber = getRandomInteger(1);
    if (randomNumber === 0) {
      return 'verticalFloat';
    }
    return 'horizontalFloat';
  };

  const getFloatAnimationDirection = () => {
    const randomNumber = getRandomInteger(1);
    if (randomNumber === 0) {
      return 'normal';
    }
    return 'reverse';
  };

  const animationStyle = `${styles.fadeIn} 1s, ${
    styles[getFloatAnimationType()]
  } 20s ${getRandomDecimal(
    5,
  )}s linear infinite ${getFloatAnimationDirection()}`;

  const getRandomStyles = () => {
    switch (quarter) {
      case 1:
        return {
          top: getRandomPosition(),
          left: getRandomPosition(),
          animation: animationStyle,
        };
      case 2:
        return {
          top: getRandomPosition(),
          right: getRandomPosition(),
          animation: animationStyle,
        };
      case 3:
        return {
          bottom: getRandomPosition(),
          left: getRandomPosition(),
          animation: animationStyle,
        };
      case 4:
        return {
          bottom: getRandomPosition(),
          right: getRandomPosition(),
          animation: animationStyle,
        };
    }
  };

  return getRandomStyles;
};

export default useBubble;
