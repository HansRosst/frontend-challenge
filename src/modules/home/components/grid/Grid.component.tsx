import { LayoutPropType } from "./Grid.types"
import StyledGrid from "./Grid.styles";
import GridItem from "./components/gridItem/GridItem.component";

const GridList = ({ goalsLocations, handleRemoveGoal, handleEditGoal, indexEditing, editing, loading }: LayoutPropType) => {
  return (
    <StyledGrid.Wrapper>
      <StyledGrid.Container>
        <StyledGrid.Grid
          container
          direction="row"
          rowSpacing={1}
          columnSpacing={1}
        >
          {!loading.status && goalsLocations.map((item, index) => {
            return <GridItem
              key={index}
              index={index}
              {...item}
              editing={editing}
              indexEditing={indexEditing}
              handleEditGoal={handleEditGoal}
              handleRemoveGoal={handleRemoveGoal}
            />
          })}
        </StyledGrid.Grid>
      </StyledGrid.Container>
    </StyledGrid.Wrapper>
  )
}

export default GridList