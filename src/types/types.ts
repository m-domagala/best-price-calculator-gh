export type TSetBoolean = React.Dispatch<React.SetStateAction<boolean>>;

export type TRefElement = React.RefObject<HTMLElement>;

interface IDataNamedShared {
  id: string;
  name: string;
}

export interface IDataProduct extends IDataNamedShared {
  requiredProductId?: string;
}

export interface IDataSpecialOffer extends IDataNamedShared {
  requiredProductsIds: string[];
  freeProductId?: string;
}

interface IDataPricedShared {
  price: number;
}

interface IDataPriceListProduct extends IDataPricedShared {
  productId: string;
}

interface IDataPriceListSpecialOffer extends IDataPricedShared {
  specialOfferId: string;
}

interface IDataPriceList {
  id: string;
  year: number;
  products: IDataPriceListProduct[];
  specialOffers: IDataPriceListSpecialOffer[];
}

export interface IDataObject {
  products: IDataProduct[];
  specialOffers: IDataSpecialOffer[];
  priceLists: IDataPriceList[];
}

export interface ISelectedProductObject {
  id: string;
  name: string;
  price: number;
  requiredProductId?: string;
}

export interface IActivePriceListSpecialOffer {
  id: string;
  name: string;
  price: number;
  requiredProductsIds: string[];
  freeProductId?: string;
}

export interface IActivePriceListObject {
  id: string;
  year: number;
  products: ISelectedProductObject[];
  specialOffers: IActivePriceListSpecialOffer[];
}

export interface IData {
  data: IDataObject;
}

interface ISelectCommon {
  label: string;
  defaultPlaceholder: string;
  disabledMessage: string;
}

export interface ISelect extends ISelectCommon {
  stateValue: IActivePriceListObject | undefined;
  setStateValue: React.Dispatch<
    React.SetStateAction<IActivePriceListObject | undefined>
  >;
  data: IActivePriceListObject[];
  additionalOnChangeAction?: () => void;
}

export interface IMultiSelect extends ISelectCommon {
  stateValues: ISelectedProductObject[] | undefined;
  setStateValues: React.Dispatch<
    React.SetStateAction<ISelectedProductObject[] | undefined>
  >;
  data?: ISelectedProductObject[];
}

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabledMessage?: string;
  icon?: 'chevron' | 'checkmark';
  isActive?: boolean;
  isOpen?: boolean;
  name?: string;
}

export interface IList {
  data: ISelectedProductObject[];
}

export interface IActiveSpecialOffer {
  activePriceList: IActivePriceListObject;
  selectedProducts: ISelectedProductObject[];
}

export interface IBubble {
  size: 's' | 'm' | 'l';
  quarter: 1 | 2 | 3 | 4;
}
