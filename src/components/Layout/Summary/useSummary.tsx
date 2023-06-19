import {
  IActivePriceListSpecialOffer,
  IActiveSpecialOffer,
} from '../../../types';
import { getPricesSum } from '../../../helpers';

const useSummary = ({
  activePriceList,
  selectedProducts,
}: IActiveSpecialOffer) => {
  const selectedProductsIds = selectedProducts.map(
    (selectedProduct) => selectedProduct.id,
  );

  const priceWithoutDiscount = getPricesSum(selectedProducts);

  const possibleSpecialOffers = activePriceList.specialOffers.filter(
    (specialOffer) => {
      return specialOffer.requiredProductsIds.every((id) =>
        selectedProductsIds.includes(id),
      );
    },
  );

  let freeProductName: string | undefined;

  const getFreeProductName = (specialOffer: IActivePriceListSpecialOffer) => {
    if (
      !specialOffer.freeProductId ||
      !selectedProductsIds.includes(specialOffer.freeProductId)
    )
      return;
    freeProductName = selectedProducts.find(
      (product) => product.id === specialOffer.freeProductId,
    )?.name;
  };

  const getProductsNotIncludedInSpecialOffer = (
    specialOffer: IActivePriceListSpecialOffer,
  ) => {
    return selectedProducts.filter(
      (product) =>
        !specialOffer.requiredProductsIds.includes(product.id) &&
        !specialOffer.freeProductId?.includes(product.id),
    );
  };

  const getTheBestOffer = () => {
    if (possibleSpecialOffers.length === 0) return;
    const specialOffersData = [];
    for (const specialOffer of possibleSpecialOffers) {
      getFreeProductName(specialOffer);
      const productsNotIncludedInSpecialOffer =
        getProductsNotIncludedInSpecialOffer(specialOffer);
      const notIncludedProductsAndSpecialOffer = [
        ...productsNotIncludedInSpecialOffer,
        specialOffer,
      ];
      specialOffersData.push({
        name: specialOffer.name,
        freeProductName,
        price: specialOffer.price,
        totalPrice: getPricesSum(notIncludedProductsAndSpecialOffer),
      });
    }
    return specialOffersData.reduce((a, b) =>
      a.totalPrice < b.totalPrice ? a : b,
    );
  };

  const theBestOfferObject = getTheBestOffer();

  return {
    priceWithoutDiscount,
    possibleSpecialOffers,
    theBestOfferObject,
  };
};

export default useSummary;
