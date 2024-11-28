import { AxiosResponse } from 'axios'
import httpService from './http'

export const getProducts = async (): Promise<AxiosResponse> => httpService.get('/products')
