import useSummary from './useSummary';
import { IActiveSpecialOffer } from '../../../types';
import {
  CURRENCY,
  SPECIALOFFERS_ACTIVE_LABEL,
  SUMMARY_LABEL,
} from '../../../constants';
import styles from './Summary.module.scss';

function Summary({ activePriceList, selectedProducts }: IActiveSpecialOffer) {
  const { priceWithoutDiscount, possibleSpecialOffers, theBestOfferObject } =
    useSummary({
      activePriceList,
      selectedProducts,
    });

  return (
    <>
      {possibleSpecialOffers.length > 0 && (
        <section>
          <div className='container'>
            <p className='label'>{SPECIALOFFERS_ACTIVE_LABEL}</p>
            <div className='rowElement'>
              <p>{theBestOfferObject?.name}</p>
              <p className='color-green'>
                {theBestOfferObject?.price}
                <span className='color-dark'>{CURRENCY}</span>
              </p>
            </div>
            {theBestOfferObject?.freeProductName && (
              <div className='rowElement'>
                <p>{theBestOfferObject.freeProductName}</p>
                <p className='color-green'>
                  0<span className='color-dark'>{CURRENCY}</span>
                </p>
              </div>
            )}
          </div>
        </section>
      )}
      {selectedProducts.length > 0 && (
        <section>
          <div className='container'>
            <div className={styles.summary}>
              <p className={styles.label}>{SUMMARY_LABEL}</p>
              <div className={styles.pricesContainer}>
                <p
                  className={`${
                    theBestOfferObject ? styles.oldPrice : ''
                  } color-red`}
                >
                  {priceWithoutDiscount}
                  <span className='color-dark'>{CURRENCY}</span>
                </p>
                {theBestOfferObject && (
                  <p className='color-green'>
                    {theBestOfferObject.totalPrice}
                    <span className='color-dark'>{CURRENCY}</span>
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
