import { useEffect, useState } from "react";
// import { CountriesData } from "../../mocks/Countries.mock";
import { FetchCountries } from "../../store/countries/Countries.actions";
import { CountriesResponseType } from "../../store/countries/Countries.types";
import useWindowDimensions from "../../utils/Functions";
import { deviceSize } from "../../utils/Sizes.styles";
import HomeLayout from "./Home.Layout"
import { GoalLocationType, HomeControllerTypes, Tloading } from "./Home.types"

const HomeController = ({ }: HomeControllerTypes) => {
  const size = useWindowDimensions();

  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [country, setCountry] = useState({
    name: '',
    alpha3Code: '',
    img: ''
  } as CountriesResponseType)
  const [editing, setEditing] = useState(false)
  const [indexEditing, setIndexEditing] = useState<number>(0)

  const [countries, setCountries] = useState<Array<CountriesResponseType>>([])

  const { width } = size
  const SizeDimension = width && width >= deviceSize.xlg_mobile1 ? true : false

  const [goalsLocations, setGoalLocations] = useState<Array<GoalLocationType>>([]) // use CountriesData caso precise de um array mocado com os países

  const [loading, setLoading] = useState({ status: true, type: 'fetching' })

  const toggleLoading = (status: Tloading) => setLoading(status)

  const handleSizeInput = (percentage: number): number => {
    if (!SizeDimension) percentage = 80;

    const widthInput = width && width * (percentage / 100) || 100;

    return widthInput
  }

  const handleStart = async () => {
    toggleLoading({ status: true, type: 'fetching' })
    await FetchCountries(toggleLoading, setCountries)
  }

  const handleCleanForm = () => {
    setCountry({ img: 'selecione' } as CountriesResponseType)
    setDate('')
    setLocation('')
  }

  const handleAddGoal = () => {
    const newArray = goalsLocations

    newArray.push({
      country: country.name,
      date: date,
      img: country.img,
      location: location
    })

    setGoalLocations(newArray)

    handleCleanForm()
  }

  const handleRemoveGoal = (index: number) => {
    toggleLoading({ status: true, type: 'fetching' })
    const newArray = goalsLocations
    newArray.splice(index, 1)
    setGoalLocations(newArray)
    toggleLoading({ status: false, type: '' })
  }

  const handleEditGoal = (index: number) => {
    setEditing(true)
    setIndexEditing(index)
    const itemEdit = goalsLocations[index]

    setCountry({ img: itemEdit.img, name: itemEdit.country, alpha3Code: '' } as CountriesResponseType)
    setDate(itemEdit.date)
    setLocation(itemEdit.location)
  }

  const handleSaveEdit = () => {
    const newArray = goalsLocations

    newArray[indexEditing] = {
      ...newArray[indexEditing],
      date: date,
      location: location
    }

    setGoalLocations(newArray)
    handleCleanForm()
    setEditing(false)
  }

  useEffect(() => {
    handleStart()
  }, [])

  return <HomeLayout
    localstate={{ size, date, location, countries, country, goalsLocations, loading, editing, indexEditing }}
    handlers={{ handleSizeInput, setDate, setLocation, setCountry, handleAddGoal, handleRemoveGoal, handleEditGoal, handleSaveEdit }} />
}

export default HomeController