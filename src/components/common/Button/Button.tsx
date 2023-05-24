import Tooltip from './Tooltip/Tooltip';
import LockIcon from '../../../assets/svgs/lock.svg';
import ChevronIcon from '../../../assets/svgs/chevron.svg';
import CheckmarkIcon from '../../../assets/svgs/checkmark.svg';
import { IButton } from '../../../types/types';

import styles from './Button.module.scss';

function Button({
  disabled,
  disabledMessage,
  icon,
  isActive,
  isOpen,
  name,
  ...rest
}: IButton) {
  return (
    <button
      className={`${styles.button} ${isOpen ? styles.open : ''} ${
        isActive ? styles.active : ''
      }`}
      disabled={disabled}
      {...rest}
    >
      {name}
      {disabled ? (
        <>
          <img src={LockIcon} alt='Lock icon' />
          {disabledMessage && <Tooltip message={disabledMessage} />}
        </>
      ) : (
        icon &&
        (icon === 'chevron' ? (
          <img
            className={styles.chevronIcon}
            src={ChevronIcon}
            alt='Chevron icon'
          />
        ) : (
          <img
            className={styles.checkmarkIcon}
            src={CheckmarkIcon}
            alt='Checkmark icon'
          />
        ))
      )}
    </button>
  );
}

export default Button;
