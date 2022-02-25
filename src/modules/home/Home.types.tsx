import { CountriesResponseType } from "../../store/countries/Countries.types";

export interface HomeControllerTypes {

}

export interface HomeLayoutTypes {
  localstate: localstateType;
  handlers: handlersType;
}

interface localstateType {
  size: WindowSizeType;
  date: string;
  location: string;
  countries: CountriesResponseType[];
  country: CountriesResponseType;
  goalsLocations: GoalLocationType[];
  loading: Tloading;
  editing: boolean;
  indexEditing: number;
}

interface handlersType {
  handleSizeInput: (percentage: number) => number;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setCountry: React.Dispatch<React.SetStateAction<CountriesResponseType>>;
  handleAddGoal: () => void;
  handleRemoveGoal: (index: number) => void;
  handleEditGoal: (index: number) => void;
  handleSaveEdit: () => void;
}

interface WindowSizeType {
  width: number | null;
  height: number | null;
}

export interface Tloading {
  status: boolean;
  type: string
}

export interface GoalLocationType {
  country: string;
  date: string;
  img: string;
  location: string;
}
