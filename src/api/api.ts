import axios from 'axios'

const API_BASE_URL = 'localhost:8000'
const API_PROTOCOL = 'http://'
const API_BASE_PATH = ''

const api = axios.create({
  baseURL: `${API_PROTOCOL}${API_BASE_URL}${API_BASE_PATH}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use((config) => {
  const newConfig = config
  newConfig.headers.Authorization = `Bearer ${localStorage.getItem('access_token') || ''}`
  return newConfig
}, error => Promise.reject(error))

export {
  api
}
