export type TId = string | null;

export type TSetId = React.Dispatch<React.SetStateAction<string | null>>;

export type TIds = string[];

export type TSetIds = React.Dispatch<React.SetStateAction<string[]>>;

export type TSetBoolean = React.Dispatch<React.SetStateAction<boolean>>;

export type TRefElement = React.RefObject<HTMLElement>;

export interface IDataElement {
  id: string;
  name: string;
}

export interface IDataProduct extends IDataElement {
  requiredProductId?: string;
  requiredForProductId?: string;
}

export interface ISelectCommon {
  label: string;
  defaultPlaceholder: string;
  disabledMessage: string;
}

export interface ISelect extends ISelectCommon {
  stateValue: TId;
  setStateValue: TSetId;
  data: IDataElement[];
  additionalOnChangeAction?: () => void;
}

export interface IMultiSelect extends ISelectCommon {
  stateValue: TIds;
  setStateValue: TSetIds;
  data: IDataProduct[];
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

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabledMessage?: string;
  icon?: 'chevron' | 'checkmark';
  isActive?: boolean;
  isOpen?: boolean;
  name: string;
}
