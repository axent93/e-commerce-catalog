import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

/**
 * new instance of axios
 */
const httpService = axios.create()

httpService.interceptors.request.use(
  (cfg: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const config = { ...cfg }
    config.baseURL = import.meta.env.VITE_APP_API_URL
    config.headers.Accept = 'application/json'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

httpService.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response.data,
  error => Promise.reject(error)
)

export default httpService
