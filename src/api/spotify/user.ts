import { api } from './api'

export module UserApi {
  export const get = () => {
    return api.post('/me')
  }
}
