import { nanoid } from 'nanoid';
import Button from '../../Button/Button';
import useSelect from '../useSelect';
import { IMultiSelect, ISelectedProductObject } from '../../../../types';
import { getElementName, checkIsElementRestricted } from '../../../../helpers';
import styles from './../Select.module.scss';

function MultiSelect({
  stateValues,
  setStateValues,
  data,
  label,
  defaultPlaceholder,
  disabledMessage,
}: IMultiSelect) {
  const { isOpen, toggleOpen, optionsRef, selectRef, scrollHeight } =
    useSelect();

  const placeholder = stateValues?.length
    ? `Wybrane (${stateValues.length})`
    : defaultPlaceholder;

  const isSelectDisabled = !data?.length;

  const selectedProductsIds =
    stateValues?.map((stateValue) => stateValue.id) || [];

  const handleOptionClick = (selectedOption: ISelectedProductObject) => {
    if (!stateValues) return;
    const { id, requiredForProductId } = selectedOption;
    let newState;
    if (selectedProductsIds?.includes(id)) {
      newState = stateValues?.filter(
        (stateValue) =>
          stateValue.id !== id && stateValue.id !== requiredForProductId,
      );
    } else {
      newState = [...stateValues, selectedOption];
    }
    setStateValues(newState);
  };

  return (
    <div className={styles.selectContainer}>
      <p className='label'>{label}</p>
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
          {data?.map((option) => (
            <li key={nanoid()}>
              <Button
                onClick={() => handleOptionClick(option)}
                tabIndex={-1}
                name={option.name}
                disabled={
                  option.requiredProductId
                    ? checkIsElementRestricted(
                        option.requiredProductId,
                        selectedProductsIds,
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
                isActive={selectedProductsIds.includes(option.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MultiSelect;
