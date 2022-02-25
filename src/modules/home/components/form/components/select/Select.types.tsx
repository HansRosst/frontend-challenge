import { CountriesResponseType } from "../../../../../../store/countries/Countries.types";

export interface LayoutPropType {
  placeholder: string;
  height?: number;
  data: Array<CountriesResponseType>
  value: CountriesResponseType;
  setCountry?: React.Dispatch<React.SetStateAction<CountriesResponseType>>;
  editing?: boolean;
}