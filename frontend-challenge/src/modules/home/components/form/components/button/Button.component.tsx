import { LayoutPropType } from "./Button.types";
import { Button } from '@mui/material';
import { deviceSize } from "../../../../../../utils/Sizes.styles";

const ButtonAction = ({ width, handleAddGoal, editing, handleSaveEdit }: LayoutPropType) => {
  return (
    <Button
      onClick={!editing ? handleAddGoal : handleSaveEdit}
      variant='contained'
      style={{
        height: 47,
        width: width && width > deviceSize.lg_tablet2 && width * 0.12 || 125,
        background: '#006C18',
        top: 11,
        marginLeft: 10,
        marginRight: 10,
      }}>
      {!editing ? 'Adicionar' : 'Salvar'}
    </Button>
  )
}

export default ButtonAction