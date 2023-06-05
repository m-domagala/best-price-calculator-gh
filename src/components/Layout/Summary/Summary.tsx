import useSummary from './useSummary';
import { IActiveSpecialOffer } from '../../../types';
import styles from './Summary.module.scss';

function Summary({ activePriceList, selectedProducts }: IActiveSpecialOffer) {
  const { priceWithoutDiscount, possibleSpecialOffers, theBestOffer } =
    useSummary({
      activePriceList,
      selectedProducts,
    });

  return (
    <>
      {possibleSpecialOffers.length > 0 && (
        <section>
          <div className='container'>
            <p className='label'>Uwzględnione rabaty</p>
            <div className='rowElement'>
              <p>{theBestOffer?.name}</p>
              <p className='color-green'>
                {theBestOffer?.price}
                <span className='color-dark'>zł</span>
              </p>
            </div>
            {theBestOffer?.freeProductName && (
              <div className='rowElement'>
                <p>{theBestOffer.freeProductName}</p>
                <p className='color-green'>
                  0<span className='color-dark'>zł</span>
                </p>
              </div>
            )}
          </div>
        </section>
      )}
      {selectedProducts.length > 0 && (
        <section>
          <div className='container'>
            <div className={`${styles.summary}`}>
              <p>RAZEM</p>
              <div className={styles.pricesContainer}>
                <p
                  className={`${theBestOffer ? styles.oldPrice : ''} color-red`}
                >
                  {priceWithoutDiscount}
                  <span className='color-dark'>zł</span>
                </p>
                {theBestOffer && (
                  <p className='color-green'>
                    {theBestOffer.totalPrice}
                    <span className='color-dark'>zł</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Summary;
