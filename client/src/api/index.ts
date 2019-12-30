import axios, { AxiosRequestConfig } from 'axios'

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: 'http://localhost:8080/',
  responseType: 'json'
}
export default axios.create(DEFAULT_API_CONFIG)
