import axios from 'axios'
import { IServices } from './requester.types'

export const apisAuthorizer = {
  environment: "https://restcountries.com",
}

const requester = async (service: IServices, data?: object) => {
  let { baseURL, endpoint, headers, method } = service

  const client: any = axios.create({ headers })

  // console.log('URL Final --> ', baseURL, endpoint)

  // console.log('baseURL + endpoint', baseURL + endpoint);

  let response = await client[method](baseURL + endpoint)

  return response
}

export default requester
