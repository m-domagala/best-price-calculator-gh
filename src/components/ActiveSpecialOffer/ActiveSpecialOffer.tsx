import {
  getElementPrice,
  getPriceListProducts,
  getPriceListSpecialOffers,
  getPriceListSpecialOffersIds,
  getSpecialOffers,
} from '../../helpers/helpers';
import { IData, TId, TIds } from '../../types';

interface IActiveSpecialOffer {
  activePriceList: TId;
  selectedProducts: TIds;
  data: IData;
}

function ActiveSpecialOffer({
  activePriceList,
  selectedProducts,
  data,
}: IActiveSpecialOffer) {
  const priceListProducts = getPriceListProducts(
    activePriceList,
    data.priceLists,
  );

  const priceListSpecialOffers = getPriceListSpecialOffers(
    activePriceList,
    data.priceLists,
  );

  const priceListSpecialOffersIds = getPriceListSpecialOffersIds(
    activePriceList,
    data.priceLists,
  );

  const activePriceListSpecialOffers = getSpecialOffers(
    priceListSpecialOffersIds,
    data.specialOffers,
  );

  const getProductsPrices = () => {
    return selectedProducts.map((productId) =>
      getElementPrice(productId, priceListProducts),
    );
  };

  const withoutDiscountPrice = getProductsPrices().reduce(
    (accumulator: number, currentValue) => {
      if (typeof currentValue === 'number') {
        return accumulator + currentValue;
      } else {
        return accumulator;
      }
    },
    0,
  );

  const possibleSpecialOffers = activePriceListSpecialOffers.filter(
    (specialOffer) => {
      return specialOffer.requiredProductsIds.every((id) =>
        selectedProducts.includes(id),
      );
    },
  );

  console.log(possibleSpecialOffers);
  // const getPossibleSpecialOffers = () => {};

  return <div>{withoutDiscountPrice}</div>;
}

export default ActiveSpecialOffer;
