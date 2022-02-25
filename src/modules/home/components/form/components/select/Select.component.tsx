import { MenuItem } from "@mui/material"
import Selection from "@mui/material/Select"
import { CountriesResponseType } from "../../../../../../store/countries/Countries.types"
import { LayoutPropType } from "./Select.types"

const Select = ({ placeholder, height = 48, data, value, setCountry, editing }: LayoutPropType) => {

  const handleChange = (event: any) => {
    if (setCountry && event.target.dataset.value)
      setCountry({
        name: event.target.outerText,
        img: event.target.dataset.value,
        alpha3Code: event.target.id
      } as CountriesResponseType);
  };

  return (
    <Selection
      value={value.img}
      defaultValue={'selecione'}
      disabled={editing || false}
      onClick={handleChange}
      displayEmpty
      style={{
        color: 'black',
        background: 'white',
        borderRadius: 7,
        height,
        width: '100%',
        padding: 15
      }}
    >
      <MenuItem value="selecione">
        <em style={{ color: 'gray', fontFamily: 'inherit' }}>{placeholder}</em>
      </MenuItem>
      {data.map((item, index) => {
        return <MenuItem id={item.alpha3Code} key={index} value={item.img}>{item.name}</MenuItem>
      })}
    </Selection>
  )
}

export default Select