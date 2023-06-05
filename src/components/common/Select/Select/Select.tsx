import { nanoid } from 'nanoid';
import Button from '../../Button/Button';
import useSelect from '../useSelect';
import { ISelect } from '../../../../types';
import styles from './../Select.module.scss';

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

  const options = data.filter((element) => element.id !== stateValue?.id);

  const placeholder = stateValue?.year || defaultPlaceholder;

  const isSelectDisabled = !data.length;

  const handleOptionClick = (id: string) => {
    const newState = data.find((element) => element.id === id);
    setStateValue(newState);
    toggleOpen();
    if (!additionalOnChangeAction) return;
    additionalOnChangeAction();
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
          name={String(placeholder)}
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
                name={String(option.year)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Select;
