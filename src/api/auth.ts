import { api } from './api'

export module AuthApi {
  export const post = (code: string) => {
    return api.post('/auth', { code })
  }
}
