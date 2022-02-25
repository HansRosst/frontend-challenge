import { InputBase, InputLabel } from "@mui/material"
import { CountriesResponseType } from "../../../../../../store/countries/Countries.types";
import Select from "../select/Select.component";
import StyledInput from "./Input.styles"
import { LayoutPropType } from "./Input.types"

const Input = ({ label, height = 48, width = 100, placeholder, type = 'InputBase', value, setter, data, setCountry, editing }: LayoutPropType) => {
  return (
    <StyledInput.Wrapper width={width}>
      <InputLabel variant='standard' style={{ color: 'white' }}>
        {label}
      </InputLabel>
      {type === 'InputBase' ?
        <InputBase
          disabled={editing}
          placeholder={placeholder}
          value={value}
          onChange={(event) => setter && setter(event.target.value)}
          style={{
            color: 'black',
            background: 'white',
            borderRadius: 7,
            height,
            width: '100%',
            padding: 15
          }} />
        :
        <Select
          data={data || []}
          editing={editing}
          value={typeof value !== "string" && value || {} as CountriesResponseType}
          setCountry={setCountry}
          placeholder={placeholder}
        />}
    </StyledInput.Wrapper>
  )
}

export default Input