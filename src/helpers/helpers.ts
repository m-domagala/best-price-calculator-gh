import {
  TRefElement,
  TSetBoolean,
  IDataProduct,
  IDataSpecialOffer,
  IDataObject,
  IActivePriceListSpecialOffer,
  ISelectedProductObject,
} from '../types';

const getProduct = (productId: string, data: IDataProduct[]) => {
  const product = data.find((element) => element.id === productId);
  return product;
};

const getSpecialOffer = (specialOfferId: string, data: IDataSpecialOffer[]) => {
  const specialOffer = data.find((element) => element.id === specialOfferId);
  return specialOffer;
};

export const getElementName = (
  elementId: string,
  data: ISelectedProductObject[],
) => {
  const dataElement = data.find((element) => element.id === elementId);
  return dataElement?.name;
};

export const checkIsElementRestricted = (
  requireElementId: string,
  selectedElements: string[],
) => {
  if (selectedElements.includes(requireElementId)) return false;
  return true;
};

export const getPriceListsData = (data: IDataObject) => {
  const { products, priceLists, specialOffers } = data;
  return priceLists.map((priceList) => {
    return {
      id: priceList.id,
      year: priceList.year,
      products: priceList.products.map((priceListProduct) => {
        const { productId, price } = priceListProduct;
        const product = getProduct(productId, products) ?? {
          name: '',
          requiredProductId: undefined,
        };
        return {
          id: productId,
          name: product.name,
          price: price,
          requiredProductId: product.requiredProductId,
        };
      }),
      specialOffers: priceList.specialOffers.map((priceListSpecialOffer) => {
        const { specialOfferId, price } = priceListSpecialOffer;
        const specialOffer = getSpecialOffer(specialOfferId, specialOffers) ?? {
          name: '',
          requiredProductsIds: [''],
          freeProductId: undefined,
        };
        return {
          id: specialOfferId,
          name: specialOffer.name,
          price: price,
          requiredProductsIds: specialOffer.requiredProductsIds,
          freeProductId: specialOffer.freeProductId,
        };
      }),
    };
  });
};

export const getPricesSum = (
  data: IActivePriceListSpecialOffer[] | ISelectedProductObject[],
) =>
  data
    .map((element) => element.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

export const closeElementOnOutsideAction = (
  event: Event,
  elementRef: TRefElement,
  setIsOpen: TSetBoolean,
) => {
  if (!(event.target instanceof HTMLElement)) return;
  if (elementRef.current?.contains(event.target)) return;
  setIsOpen(false);
};
