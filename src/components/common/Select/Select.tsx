import { nanoid } from 'nanoid';
import useSelect from './useSelect';
import { IDataElement, ISelect } from '../../../types/types';
import { getElementNameByID } from '../../../helpers/helpers';
import styles from './Select.module.scss';
import Button from '../Button/Button';

function Select({
  stateValue,
  setStateValue,
  data,
  label,
  defaultPlaceholder,
  disabledMessage,
}: ISelect) {
  const { isOpen, toggleOpen, optionsRef, selectRef, scrollHeight } =
    useSelect();

  const options = data.filter(
    (element: IDataElement) => element.id !== stateValue,
  );

  const placeholder =
    getElementNameByID(stateValue, data) || defaultPlaceholder;

  const isSelectDisabled = data.length < 1;

  const handleOptionClick = (id: string) => {
    setStateValue(id);
    toggleOpen();
  };

  return (
    <div>
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
          isIcon
          isOpen={isOpen}
        />
        <ul
          className={styles.options}
          style={{ height: `${scrollHeight}px` }}
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
