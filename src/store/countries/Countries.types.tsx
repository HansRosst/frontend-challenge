import { AxiosRequestHeaders } from "axios";

export interface ICountriesEndpointsList {
  getCountries: TCountriesEndpointType;
}

interface TCountriesEndpointType {
  baseURL: string;
  endpoint: string;
  endpointStack: string;
  headers: AxiosRequestHeaders;
  method: TCountriesStoreMethod;
}

type TCountriesStoreMethod = 'post' | 'get' | 'put' | 'delete'

export interface CountriesResponseType {
  name: string;
  alpha3Code: string;
  img: string;
}
