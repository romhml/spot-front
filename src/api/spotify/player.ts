import { api } from './api'

export module PlayerApi {
  export const get = () => {
    return api.get('/me/player')
  }

  export const play = () => {
    return api.put('/me/player/play')
  }

  export const next = () => {
    return api.post('/me/player/next')
  }

  export const previous = () => {
    return api.post('/me/player/previous')
  }
}
