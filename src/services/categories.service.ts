import { AxiosResponse } from 'axios'
import httpService from './http'

export const getCategories = async (): Promise<AxiosResponse> => httpService.get('/categories')
