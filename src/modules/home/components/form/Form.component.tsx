import StyledForm from './Form.styles';
import { LayoutPropType } from './Form.types';
import Input from './components/input/Input.layout';
import ButtonAction from './components/button/Button.component';
import InputDate from './components/inputDate/InputDate.component';

const Form = ({ handleSizeInput, setLocation, setDate, setCountry, handleAddGoal, handleSaveEdit, country, width, date, location, countries, editing }: LayoutPropType) => {
  return (
    <StyledForm.Wrapper>
      <Input
        label='País'
        type='Select'
        placeholder='Selecione...'
        data={countries}
        value={country}
        editing={editing}
        width={handleSizeInput(20)}
        setCountry={setCountry}
      />
      <Input
        label='Local'
        placeholder='Digite o local que deseja conhecer'
        value={location}
        width={handleSizeInput(30)}
        setter={setLocation}
      />
      {/* //React Input Mask */}
      <InputDate
        width={handleSizeInput(20)}
        label='Meta'
        placeholder='Mês/Ano'
        value={date}
        setter={setDate}
      />
      {/* //React Input Mask */}
      <ButtonAction
        handleAddGoal={handleAddGoal}
        width={width || 20}
        editing={editing}
        handleSaveEdit={handleSaveEdit}
      />
    </StyledForm.Wrapper>
  )
}

export default Form