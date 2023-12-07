import { nanoid } from 'nanoid';
import { IList } from '../../../types';
import { CURRENCY } from '../../../constants';

function Products({ data }: IList) {
  return (
    <section>
      <div className='container'>
        <p className='label'>Wybrane usługi</p>
        <ul>
          {data.map((element) => (
            <li key={nanoid()} className='rowElement'>
              <p>{element.name}</p>
              <p className='color-red'>
                {element.price}
                <span className='color-dark'>{CURRENCY}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Products;
