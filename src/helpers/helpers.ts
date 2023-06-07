import {
  TRefElement,
  TSetBoolean,
  TDataPricedElement,
  TDataNamedElement,
  IDataPriceList,
  IDataProduct,
  IDataSpecialOffer,
  IDataObject,
  IActivePriceListSpecialOffer,
  ISelectedProductObject,
} from '../types/types';

export const getElementName = (
  elementId: string,
  data: TDataNamedElement[],
) => {
  const dataElement = data.find((element) => element.id === elementId);
  return dataElement?.name;
};

export const getProduct = (productId: string, data: IDataProduct[]) => {
  const product = data.find((element) => element.id === productId);
  return product;
};

export const getSpecialOffer = (
  specialOfferId: string,
  data: IDataSpecialOffer[],
) => {
  const specialOffer = data.find((element) => element.id === specialOfferId);
  return specialOffer;
};

export const getElementPrice = (
  elementId: string,
  data: TDataPricedElement[],
) => {
  const idKey = Object.keys(data[0])[0] as keyof TDataPricedElement;
  const dataElement = data.find(
    (element) => String(element[idKey]) === elementId,
  );
  return dataElement?.price;
};

export const getProducts = (productsIds: string[], data: IDataProduct[]) => {
  const products = data.filter((element) => productsIds.includes(element.id));
  return products;
};

export const getSpecialOffers = (
  specialOffersIds: string[],
  data: IDataSpecialOffer[],
) => {
  const specialOffers = data.filter((element) =>
    specialOffersIds.includes(element.id),
  );
  return specialOffers;
};

export const getPriceListProducts = (
  priceListId: string,
  data: IDataPriceList[],
) => {
  const priceList = data.find((element) => element.id === priceListId);
  return priceList?.products || [];
};

export const getPriceListProductsIds = (
  priceListId: string,
  data: IDataPriceList[],
) => {
  const priceListProductsIds = getPriceListProducts(priceListId, data).map(
    (element) => element.productId,
  );
  return priceListProductsIds || [];
};

export const getPriceListSpecialOffers = (
  priceListId: string,
  data: IDataPriceList[],
) => {
  const priceList = data.find((element) => element.id === priceListId);
  return priceList?.specialOffers || [];
};

export const getPriceListSpecialOffersIds = (
  priceListId: string,
  data: IDataPriceList[],
) => {
  const priceListSpecialOffersIds = getPriceListSpecialOffers(
    priceListId,
    data,
  ).map((element) => element.specialOfferId);
  return priceListSpecialOffersIds || [];
};

export const closeElementOnOutsideAction = (
  event: Event,
  elementRef: TRefElement,
  setIsOpen: TSetBoolean,
) => {
  if (!(event.target instanceof HTMLElement)) return;
  if (elementRef.current?.contains(event.target)) return;
  setIsOpen(false);
};

export const checkIsElementRestricted = (
  requireElementId: string,
  selectedElements: string[],
) => {
  if (selectedElements.includes(requireElementId)) return false;
  return true;
};

export const checkHasDataUndefinedElement = (data: object[]) => {
  for (const element of data) {
    const objectValues = Object.values(element);
    for (const value of objectValues) {
      if (value === undefined) {
        return true;
      }
    }
  }
  return false;
};

export const getPriceListsData = (data: IDataObject) => {
  const { products, priceLists, specialOffers } = data;
  return priceLists.map((priceList) => {
    return {
      id: priceList.id,
      year: priceList.year,
      products: priceList.products.map((priceListProduct) => {
        const { productId, price } = priceListProduct;
        const product = getProduct(productId, products);
        if (product)
          return {
            id: productId,
            name: product.name,
            price: price,
            requiredForProductId: product.requiredForProductId,
            requiredProductId: product.requiredProductId,
          };
      }),
      specialOffers: priceList.specialOffers.map((priceListSpecialOffer) => {
        const { specialOfferId, price } = priceListSpecialOffer;
        const specialOffer = getSpecialOffer(specialOfferId, specialOffers);
        if (specialOffer)
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
