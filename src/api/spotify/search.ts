import { api } from './api'
import { Spotify } from '@/types/Spotify'

export module SearchApi {
  export const get = (query: string, limit: number, type: string) => {
    return api.get(`/search?q=${query}&limit=${limit}&type=${type}`)
  }
}
