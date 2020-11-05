import axios from 'axios'
import { LocalStorageService } from '@/services/LocalStorageService'

const API_BASE_URL = 'localhost:8000'
const API_PROTOCOL = 'http://'
const API_BASE_PATH = ''

const api = axios.create({
  baseURL: `${API_PROTOCOL}${API_BASE_URL}${API_BASE_PATH}`,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Intercept request and set authorization header
api.interceptors.request.use((config) => {
  const accessToken = LocalStorageService.getAccessToken()
  if (accessToken) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
  }
  return config
}, error => Promise.reject(error))

export {
  api
}
