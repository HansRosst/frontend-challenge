export interface LayoutPropType {
  img: string;
  country: string;
  location: string;
  date: string;
  index: number;
  handleRemoveGoal: (index: number) => void;
  handleEditGoal: (index: number) => void;
  indexEditing: Number;
  editing?: boolean;
}