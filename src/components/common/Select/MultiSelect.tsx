import { nanoid } from 'nanoid';
import useSelect from './useSelect';
import { IMultiSelect } from '../../../types/types';
import styles from './Select.module.scss';
import Button from '../Button/Button';
import { getElementNameByID } from '../../../helpers/helpers';

function MultiSelect({
  stateValue,
  setStateValue,
  data,
  label,
  defaultPlaceholder,
  disabledMessage,
}: IMultiSelect) {
  const { isOpen, toggleOpen, optionsRef, selectRef, scrollHeight } =
    useSelect();

  const placeholder = stateValue?.length
    ? `Wybrane (${stateValue.length})`
    : defaultPlaceholder;

  const isSelectDisabled = data.length < 1;

  const handleOptionClick = (id: string) => {
    let newState;
    if (stateValue.includes(id)) {
      newState = stateValue.filter((element) => element !== id);
    } else {
      newState = [...stateValue, id];
    }
    setStateValue(newState);
  };

  const checkIsElementRestricted = (
    requireElementId: string,
    selectedElements: string[],
  ) => {
    if (selectedElements.includes(requireElementId)) return false;
    return true;
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
          {data.map((option) => (
            <li key={nanoid()}>
              <Button
                onClick={() => handleOptionClick(option.id)}
                tabIndex={-1}
                name={option.name}
                disabled={
                  option.requiredProductId
                    ? checkIsElementRestricted(
                        option.requiredProductId,
                        stateValue,
                      )
                    : false
                }
                disabledMessage={
                  option.requiredProductId &&
                  `Wymagany produkt: "${getElementNameByID(
                    option.requiredProductId,
                    data,
                  )}"`
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MultiSelect;
