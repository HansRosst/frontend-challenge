import { CountriesResponseType } from "../../../../../../store/countries/Countries.types";

export interface LayoutPropType {
  label: string;
  width?: number;
  height?: number;
  placeholder: string;
  type?: 'InputBase' | 'Select';
  value: string | CountriesResponseType;
  setter?: React.Dispatch<React.SetStateAction<string>>;
  setCountry?: React.Dispatch<React.SetStateAction<CountriesResponseType>>;
  data?: Array<CountriesResponseType>;
  editing?: boolean;
}