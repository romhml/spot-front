import { api } from './api'
import { AuthTokens } from '@/types/AuthTokens'

export module AuthApi {
  export const post = (code: string) => {
    return api.post('/auth', { code })
  }

  export const refresh = (refreshToken: string) => {
    return api.post('/auth/refresh', { refreshToken })
  }
}
