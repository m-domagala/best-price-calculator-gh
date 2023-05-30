import { nanoid } from 'nanoid';
import useSelect from './useSelect';
import { ISelect } from '../../../types/types';
import { getElementName } from '../../../helpers/helpers';
import styles from './Select.module.scss';
import Button from '../Button/Button';

function Select({
  stateValue,
  setStateValue,
  data,
  label,
  defaultPlaceholder,
  disabledMessage,
  additionalOnChangeAction,
}: ISelect) {
  const { isOpen, toggleOpen, optionsRef, selectRef, scrollHeight } =
    useSelect();

  const options = data.filter((element) => element.id !== stateValue);

  const placeholder = getElementName(stateValue, data) || defaultPlaceholder;

  const isSelectDisabled = data.length < 1;

  const handleOptionClick = (id: string) => {
    setStateValue(id);
    toggleOpen();
    if (additionalOnChangeAction === undefined) return;
    additionalOnChangeAction();
  };

  return (
    <div className={styles.selectContainer}>
      <p>{label}</p>
      <div
        className={`${styles.select} ${isOpen ? styles.open : ''}`}
        ref={selectRef}
      >
        <Button
          onClick={toggleOpen}
          name={placeholder}
          disabled={isSelectDisabled}
          disabledMessage={disabledMessage}
          icon='chevron'
          isOpen={isOpen}
        />
        <ul
          className={styles.options}
          style={{
            height: `${scrollHeight}px`,
          }}
          ref={optionsRef}
        >
          {options.map((option) => (
            <li key={nanoid()}>
              <Button
                onClick={() => handleOptionClick(option.id)}
                tabIndex={-1}
                name={option.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Select;
