import { nanoid } from 'nanoid';
import { IList } from '../../types/types';
import { checkHasDataUndefinedElement } from '../../helpers/helpers';
import styles from './List.module.scss';

function List({ data }: IList) {
  const hasDataUndefinedElement = checkHasDataUndefinedElement(data);
  return (
    <>
      {!hasDataUndefinedElement && (
        <div className={styles.listContainer}>
          <p>Wybrane usługi</p>
          <ul className={styles.list}>
            {data.map((element) => (
              <li key={nanoid()} className={styles.listElement}>
                <p>{element.name}</p>
                <p className={styles.price}>
                  {element.price}
                  <span className={styles.currency}>zł</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default List;
