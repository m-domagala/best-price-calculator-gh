import { IActiveSpecialOffer } from '../../../types';
import { getTotalPrice } from '../../../helpers';

const useSummary = ({
  activePriceList,
  selectedProducts,
}: IActiveSpecialOffer) => {
  const selectedProductsIds = selectedProducts.map(
    (selectedProduct) => selectedProduct.id,
  );

  const priceWithoutDiscount = getTotalPrice(selectedProducts);

  const possibleSpecialOffers = activePriceList.specialOffers.filter(
    (specialOffer) => {
      return specialOffer.requiredProductsIds?.every((id) =>
        selectedProductsIds.includes(id),
      );
    },
  );

  const getTheBestOffer = () => {
    if (possibleSpecialOffers.length === 0) return;
    const specialOffersData = [];
    let freeProductName;
    for (const specialOffer of possibleSpecialOffers) {
      if (
        specialOffer.freeProductId &&
        selectedProductsIds?.includes(specialOffer.freeProductId)
      ) {
        freeProductName = selectedProducts.find(
          (product) => product.id === specialOffer.freeProductId,
        )?.name;
      }
      const filteredProducts = selectedProducts.filter(
        (product) =>
          !specialOffer.requiredProductsIds?.includes(product.id) &&
          !specialOffer.freeProductId?.includes(product.id),
      );
      filteredProducts.push(specialOffer);
      specialOffersData.push({
        name: specialOffer.name,
        freeProductName,
        price: specialOffer.price,
        totalPrice: getTotalPrice(filteredProducts),
      });
    }
    return specialOffersData.reduce((a, b) =>
      a.totalPrice < b.totalPrice ? a : b,
    );
  };

  const theBestOffer = getTheBestOffer();

  return {
    priceWithoutDiscount,
    possibleSpecialOffers,
    theBestOffer,
  };
};

export default useSummary;
