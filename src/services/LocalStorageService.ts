import { AuthTokens } from '@/types/AuthTokens'

export module LocalStorageService {

  export const setAuthTokens = (authInfo: AuthTokens) => {
    localStorage.setItem('access_token', authInfo.accessToken)
    localStorage.setItem('refresh_token', authInfo.refreshToken)
  }

  export const setAccessToken = (accessToken: string) => {
    localStorage.setItem('access_token', accessToken)
  }

  export const getAccessToken = () => {
    return localStorage.getItem('access_token')
  }

  export const getRefreshToken = () => {
    return localStorage.getItem('refresh_token')
  }

  export const clearAuthTokens = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  }
}
