import { ButtonHTMLAttributes } from 'react';
import Tooltip from './Tooltip/Tooltip';
import LockIcon from '../../../assets/svgs/lock.svg';
import ChevronIcon from '../../../assets/svgs/chevron.svg';
import styles from './Button.module.scss';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  isIcon?: boolean;
  isOpen?: boolean;
  disabledMessage?: string;
}

function Button({
  disabled,
  disabledMessage,
  name,
  isIcon,
  isOpen,
  ...rest
}: IButton) {
  return (
    <button
      className={`${styles.button} ${isOpen ? styles.open : ''}`}
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
        isIcon && (
          <img className={styles.icon} src={ChevronIcon} alt='Chevron icon' />
        )
      )}
    </button>
  );
}

export default Button;
