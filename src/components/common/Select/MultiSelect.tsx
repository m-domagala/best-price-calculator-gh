import { nanoid } from 'nanoid';
import useSelect from './useSelect';
import { IMultiSelect } from '../../../types/types';
import styles from './Select.module.scss';
import Button from '../Button/Button';
import {
  getElementName,
  checkIsElementRestricted,
} from '../../../helpers/helpers';

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

  const handleOptionClick = (
    id: string,
    requiredForProductId: string | undefined,
  ) => {
    let newState;
    if (stateValue.includes(id)) {
      newState = stateValue.filter(
        (element) => element !== id && element !== requiredForProductId,
      );
    } else {
      newState = [...stateValue, id];
    }
    setStateValue(newState);
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
          {data.map((option) => (
            <li key={nanoid()}>
              <Button
                onClick={() =>
                  handleOptionClick(option.id, option.requiredForProductId)
                }
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
                  `Wymagany produkt: "${getElementName(
                    option.requiredProductId,
                    data,
                  )}"`
                }
                icon='checkmark'
                isActive={stateValue.includes(option.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MultiSelect;
