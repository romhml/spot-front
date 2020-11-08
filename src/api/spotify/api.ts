import axios from 'axios'
import { LocalStorageService } from '@/services/LocalStorageService'

import { addBearerToken, refreshTokens, camelizeResponse, snakizeRequest } from '../interceptors'

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
api.interceptors.request.use(addBearerToken, error => Promise.reject(error))

// Intercept Unhauthorized response and attempt to refresh tokens
api.interceptors.response.use(response => response, refreshTokens)

api.interceptors.request.use(snakizeRequest, error => Promise.reject(error))
api.interceptors.response.use(camelizeResponse, error => Promise.reject(error))

export {
  api
}
