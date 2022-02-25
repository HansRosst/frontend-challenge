import { GoalLocationType, Tloading } from "../../Home.types";

export interface LayoutPropType {
  goalsLocations: GoalLocationType[];
  indexEditing: Number;
  handleRemoveGoal: (index: number) => void;
  handleEditGoal: (index: number) => void;
  editing?: boolean;
  loading: Tloading;
}