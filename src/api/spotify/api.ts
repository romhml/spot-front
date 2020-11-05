import axios from 'axios'
import { LocalStorageService } from '@/services/LocalStorageService'

const SPOTIFY_BASE_URL = 'api.spotify.com'
const SPOTIFY_PROTOCOL = 'https://'
const SPOTIFY_BASE_PATH = '/v1'

const api = axios.create({
  baseURL: `${SPOTIFY_PROTOCOL}${SPOTIFY_BASE_URL}${SPOTIFY_BASE_PATH}`,
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

// Intercept Unhauthorized response and attempt to refresh tokens
api.interceptors.response.use((response) => {
  return response
}, error => {
  const request = error.config

  if (error.response.status === 401 && !request._retry) {
    request._retry = true
    console.log('TODO Implement refresh token API')
  }

  LocalStorageService.clearAuthTokens()
  return Promise.reject(error)
})

export {
  api
}
