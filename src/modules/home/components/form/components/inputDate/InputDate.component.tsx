import InputMask from 'react-input-mask';
import { InputBase, InputLabel } from "@mui/material"
import { LayoutPropType } from './InputDate.types';
import StyledInputDate from './InputDate.styles';

const InputDate = ({ width, label, placeholder, height, value, setter }: LayoutPropType) => {
  return (
    <StyledInputDate.Wrapper width={width}>
      <InputLabel variant='standard' style={{ color: 'white' }}>
        {label}
      </InputLabel>
      <InputMask mask="99/9999" value={value} onChange={event => setter(event.target.value)}>
        {() => <InputBase
          placeholder={placeholder}
          style={{
            color: 'black',
            background: 'white',
            borderRadius: 7,
            height,
            width: '100%',
            padding: 8
          }} />
        }
      </InputMask>
    </StyledInputDate.Wrapper>
  )
}

export default InputDate