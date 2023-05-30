export type TId = string | null;

export type TSetId = React.Dispatch<React.SetStateAction<string | null>>;

export type TIds = string[];

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

export type TDataNamedElement = IDataProduct | IDataSpecialOffer;

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

export interface ISelectCommon {
  label: string;
  defaultPlaceholder: string;
  disabledMessage: string;
}

export interface ISelect extends ISelectCommon {
  stateValue: TId;
  setStateValue: TSetId;
  data: IDataNamedShared[];
  additionalOnChangeAction?: () => void;
}

export interface IMultiSelect extends ISelectCommon {
  stateValue: TIds;
  setStateValue: TSetIds;
  data: IDataProduct[];
}

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabledMessage?: string;
  icon?: 'chevron' | 'checkmark';
  isActive?: boolean;
  isOpen?: boolean;
  name: string;
}

export interface IListElement {
  name: string | undefined;
  price: number | undefined;
}

export interface IList {
  data: IListElement[];
}
