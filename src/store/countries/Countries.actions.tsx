import { getCountries } from './Countries.endpoints';
import { CountriesResponseType } from './Countries.types';

export const FetchCountries = async (callback: ({ status, type }: any) => void, setCountries: React.Dispatch<React.SetStateAction<CountriesResponseType[]>>) => {
  try {
    await getCountries()
      .then((response) => {
        callback({ status: false, type: 'success' })
        const { data } = response

        const countries: Array<CountriesResponseType> = []

        data.map((item: any) => {
          countries.push({
            name: item.translations.br,
            alpha3Code: item.alpha3Code,
            img: item.flags.png
          })
        })

        setCountries(countries.sort((x: CountriesResponseType, y: CountriesResponseType) => {
          if (x.name < y.name) { return -1; }
          if (x.name > y.name) { return 1; }
          return 0;
        }))
      })
      .catch((err) => {
        console.log('Error on FetchCountries -->', err)
        callback({ status: false, type: 'not_countries' })
      })

  } catch (error) {
    console.log('Error catch FetchCountries --> ', error)
    callback({ status: false, type: 'not_countries' })
  }
}