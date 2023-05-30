import {
  TId,
  TRefElement,
  TSetBoolean,
  TDataPricedElement,
  TDataNamedElement,
  IDataPriceList,
  IDataProduct,
} from '../types/types';

export const getElementName = (elementId: TId, data: TDataNamedElement[]) => {
  const dataElement = data.find((element) => element.id === elementId);
  return dataElement?.name;
};

export const getElementPrice = (elementId: TId, data: TDataPricedElement[]) => {
  const idKey = Object.keys(data[0])[0] as keyof TDataPricedElement;
  const dataElement = data.find(
    (element) => String(element[idKey]) === elementId,
  );
  return dataElement?.price;
};

export const getPriceListProducts = (
  priceListId: TId,
  data: IDataPriceList[],
) => {
  const priceList = data.find((element) => element.id === priceListId);
  return priceList?.products || [];
};

export const getPriceListProductsIds = (
  priceListId: TId,
  data: IDataPriceList[],
) => {
  const priceListProductsIds = getPriceListProducts(priceListId, data).map(
    (product) => product.productId,
  );
  return priceListProductsIds || [];
};

export const getProducts = (productsIds: TId[], data: IDataProduct[]) => {
  const products = data.filter((element) => productsIds.includes(element.id));
  return products;
};

export const closeElementOnOutsideAction = (
  event: Event,
  elementRef: TRefElement,
  setIsOpen: TSetBoolean,
) => {
  if (event.target instanceof HTMLElement) {
    if (elementRef.current?.contains(event.target)) return;
    setIsOpen(false);
  }
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
