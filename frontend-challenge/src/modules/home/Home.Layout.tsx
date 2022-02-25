import { HomeLayoutTypes } from "./Home.types"
import Header from './components/header/Header.component';
import Form from "./components/form/Form.component";
import Grid from "./components/grid/Grid.component";

const HomeLayout = ({ handlers: {
  handleSizeInput,
  setDate,
  setLocation,
  setCountry,
  handleAddGoal,
  handleRemoveGoal,
  handleEditGoal,
  handleSaveEdit }, localstate }: HomeLayoutTypes) => {
  const { goalsLocations, indexEditing, editing, loading } = localstate

  return (
    <>
      <Header />
      <Form
        {...localstate.size}
        {...localstate}
        handleAddGoal={handleAddGoal}
        handleSizeInput={handleSizeInput}
        setDate={setDate}
        setLocation={setLocation}
        setCountry={setCountry}
        handleSaveEdit={handleSaveEdit}
      />
      <Grid
        loading={loading}
        editing={editing}
        indexEditing={indexEditing}
        goalsLocations={goalsLocations}
        handleEditGoal={handleEditGoal}
        handleRemoveGoal={handleRemoveGoal}
      />
    </>
  )
}

export default HomeLayout