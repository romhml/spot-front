import axios from 'axios'

import { addBearerToken, camelizeResponse, snakizeRequest } from './interceptors'

const API_BASE_URL = 'localhost:8000'
const API_PROTOCOL = 'http://'
const API_BASE_PATH = ''

const api = axios.create({
  baseURL: `${API_PROTOCOL}${API_BASE_URL}${API_BASE_PATH}`,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(addBearerToken, error => Promise.reject(error))
api.interceptors.request.use(snakizeRequest, error => Promise.reject(error))
api.interceptors.response.use(camelizeResponse, error => Promise.reject(error))

export {
  api
}
