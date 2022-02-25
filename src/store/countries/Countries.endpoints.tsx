import requester, { apisAuthorizer } from '../requester'
import { ICountriesEndpointsList } from './Countries.types'

const { environment } = apisAuthorizer

const servicesCountries: ICountriesEndpointsList = {
  getCountries: {
    baseURL: environment,
    endpoint: '/v2/all',
    endpointStack: '/v2/all',
    headers: {},
    method: 'get'
  },
}

export async function getCountries() {
  let { getCountries } = servicesCountries

  // console.log('Request cURL -->', getCountries)
  return await requester(getCountries)
}
