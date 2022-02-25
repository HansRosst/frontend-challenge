import { CountriesResponseType } from "../../../../store/countries/Countries.types";

export interface LayoutPropType {
  handleSizeInput: (percentage: number) => number
  setDate: React.Dispatch<React.SetStateAction<string>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setCountry: React.Dispatch<React.SetStateAction<CountriesResponseType>>;
  handleAddGoal: () => void;
  handleSaveEdit: () => void;
  country: CountriesResponseType;
  width: number | null;
  date: string;
  location: string;
  countries: CountriesResponseType[];
  editing: boolean;
}