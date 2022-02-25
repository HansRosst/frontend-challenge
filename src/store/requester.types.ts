import { AxiosRequestHeaders } from "axios";

export interface IServices {
  baseURL: string;
  endpoint: string;
  endpointStack?: string;
  headers: AxiosRequestHeaders;
  method: TMethod;
}

type TMethod = 'post' | 'get' | 'put' | 'delete'