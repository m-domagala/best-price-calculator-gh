export type TId = string | null;

export type TSetId = React.Dispatch<React.SetStateAction<string | null>>;

export type TIds = string[];

export type TSetIds = React.Dispatch<React.SetStateAction<string[]>>;

export type TSetBoolean = React.Dispatch<React.SetStateAction<boolean>>;

export type TRefElement = React.RefObject<HTMLElement>;

export interface IDataElement {
  id: string;
  name: string;
  requiredProductId?: string;
}

export interface ISelect {
  stateValue: TId;
  setStateValue: TSetId;
  data: IDataElement[];
  label: string;
  defaultPlaceholder: string;
  disabledMessage: string;
}

export interface IMultiSelect {
  stateValue: TIds;
  setStateValue: TSetIds;
  data: IDataElement[];
  label: string;
  defaultPlaceholder: string;
  disabledMessage: string;
}

export interface IPriceListProduct {
  productId: string;
  price: number;
}

export interface IPriceList {
  id: string;
  name: string;
  products: IPriceListProduct[];
}
