import StyledGridItem from "./GridItem.styles"
import { LayoutPropType } from "./GridItem.types"
import { Grid } from "@mui/material";
import { Edit, Close } from '@mui/icons-material';

const GridItem = ({ country, date, img, location, index, handleRemoveGoal, handleEditGoal, indexEditing, editing }: LayoutPropType) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} style={{ padding: '8px 0px 8px 8px' }}>
      <StyledGridItem.Box
        key={index}
        bgcolor={editing && index === indexEditing ? '#ffffcc' : 'white'}
        border='hidden'
      >
        <StyledGridItem.Row>
          <StyledGridItem.Img src={img} />
          <StyledGridItem.Wrapper>
            <Edit
              onClick={() => handleEditGoal(index)}
              style={{ color: '#868686', width: 18, marginRight: 5 }}
            />
            <Close
              onClick={() => handleRemoveGoal(index)}
              style={{ color: '#868686', width: 22 }}
            />
          </StyledGridItem.Wrapper>
        </StyledGridItem.Row>
        <StyledGridItem.Wrapper pad="0px 15px">
          <StyledGridItem.Title>{country}</StyledGridItem.Title>
          <StyledGridItem.Divider />
        </StyledGridItem.Wrapper>
        <StyledGridItem.Wrapper pad="0px 26px">
          <StyledGridItem.Text>Local: {location.substring(0, 15)} {location.length > 15 && '...'}</StyledGridItem.Text>
          <StyledGridItem.Text>Meta: {date}</StyledGridItem.Text>
        </StyledGridItem.Wrapper>
      </StyledGridItem.Box>
    </Grid>
  )
}

export default GridItem