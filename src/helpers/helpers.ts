import {
  IDataElement,
  TRefElement,
  TSetBoolean,
  TId,
  IPriceList,
} from '../types/types';

export const getPriceListProducts = (id: TId, data: IPriceList[]) => {
  const priceList = data.find((element) => element.id === id);
  return priceList?.products;
};

export const getElementNameByID = (id: TId, data: IDataElement[]) => {
  const dataElement = data.find((element) => element.id === id);
  return dataElement?.name;
};

export const getPriceListProductsById = (id: TId, data: IPriceList[]) => {
  const priceListProducts = data
    .find((element) => element.id === id)
    ?.products.map((product) => product.productId);
  return priceListProducts || [];
};

export const getElementsByIds = (ids: TId[], data: IDataElement[]) => {
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
