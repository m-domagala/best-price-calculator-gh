import {
  TId,
  TRefElement,
  TSetBoolean,
  IDataNamedShared,
  TDataPricedElement,
  TDataNamedElement,
  IDataPriceList,
} from '../types/types';

export const getElementName = (id: TId, data: TDataNamedElement[]) => {
  const dataElement = data.find((element) => element.id === id);
  return dataElement?.name;
};

export const getElementPrice = (id: TId, data: TDataPricedElement[]) => {
  const idKey = Object.keys(data[0])[0] as keyof TDataPricedElement;
  const dataElement = data.find((element) => String(element[idKey]) === id);
  return dataElement?.price;
};

export const getPriceListProducts = (id: TId, data: IDataPriceList[]) => {
  const priceList = data.find((element) => element.id === id);
  return priceList?.products;
};

export const getPriceListProductsIds = (
  priceListId: TId,
  priceLists: IDataPriceList[],
) => {
  const priceListProductsIds = priceLists
    .find((priceList) => priceList.id === priceListId)
    ?.products.map((product) => product.productId);
  return priceListProductsIds || [];
};

export const getElements = (ids: TId[], data: IDataNamedShared[]) => {
  const filteredData = data.filter((element) => ids.includes(element.id));
  return filteredData;
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

// export const getElementKeyValueById = (id: string, key: string) => {};
