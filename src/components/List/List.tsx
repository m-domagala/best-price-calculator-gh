import { nanoid } from 'nanoid';
import { IList } from '../../types/types';
import styles from './List.module.scss';

function List({ data }: IList) {
  return (
    <section>
      <ul className={styles.list}>
        {data.map((element) => (
          <li key={nanoid()}>
            <p>{element.name}</p>
            <p>{`${element.price}zł`}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;
