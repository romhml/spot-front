import { AxiosRequestConfig, AxiosResponse } from 'axios'
import camelcaseKeys from 'camelcase-keys'
import snakecaseKeys from 'snakecase-keys'

import { LocalStorageService } from '@/services/LocalStorageService'
import router from '@/router'
import { AuthApi } from './auth'

export const addBearerToken = (config: AxiosRequestConfig) => {
  const accessToken = LocalStorageService.getAccessToken()
  if (accessToken) {
    config.headers.Authorization = `Bearer ${LocalStorageService.getAccessToken()}`
  }
  return config
}

export const refreshTokens = (error: any) => {
  const request = error.config
  const refreshToken = LocalStorageService.getRefreshToken()

  if (error.response.status === 401 && !request._retry && refreshToken != null) {
    request._retry = true

    AuthApi.refresh(refreshToken).then((response) => {
      LocalStorageService.setAccessToken(response.data.accessToken)
    })

    // Retry original request
    return request.config
  } else if (error.response.status === 401 && request._retry) {
    // Could not refresh tokens => clear state (user will go back to Login page)
    LocalStorageService.clearAuthTokens()
    router.push('/')
  }

  Promise.reject(error)
}

export const camelizeResponse = (config: AxiosResponse) => {
  if (config && config.data) {
    config.data = camelcaseKeys(config.data, { deep: true })
  }
  return config
}

export const snakizeRequest = (config: AxiosRequestConfig) => {
  if (config) {
    config.data = config.data ? snakecaseKeys(config.data, { deep: true }) : undefined
    config.params = config.params ? snakecaseKeys(config.params, { deep: true }) : undefined
  }
  return config
}
