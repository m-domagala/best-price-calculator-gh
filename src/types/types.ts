export type TSetId = React.Dispatch<React.SetStateAction<string | null>>;

export type TSetIds = React.Dispatch<React.SetStateAction<string[]>>;

export type TSetBoolean = React.Dispatch<React.SetStateAction<boolean>>;

export type TRefElement = React.RefObject<HTMLElement>;

export interface IDataNamedShared {
  id: string;
  name: string;
}

export interface IDataProduct extends IDataNamedShared {
  requiredProductId?: string;
  requiredForProductId?: string;
}

export interface IDataSpecialOffer extends IDataNamedShared {
  requiredProductsIds: string[];
  freeProductId?: string;
}

export type TDataNamedElement = ISelectedProductObject;

export interface IDataPricedShared {
  price: number;
}

export interface IDataPriceListProduct extends IDataPricedShared {
  productId: string;
}

export interface IDataPriceListSpecialOffer extends IDataPricedShared {
  specialOfferId: string;
}

export type TDataPricedElement =
  | IDataPriceListProduct
  | IDataPriceListSpecialOffer;

export interface IDataPriceList {
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
  name?: string;
  price: number;
  requiredForProductId?: string;
  requiredProductId?: string;
}

export interface IActivePriceListSpecialOffer {
  id: string;
  name?: string;
  price: number;
  requiredProductsIds?: string[];
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

export interface ISelectCommon {
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
