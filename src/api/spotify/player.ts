import { api } from './api'
import { Spotify } from '@/types/Spotify'

export module PlayerApi {
  export const get = () => {
    return api.get<Spotify.PlayerStatus>('/me/player')
  }

  export const play = () => {
    return api.put('/me/player/play')
  }

  export const pause = () => {
    return api.put('/me/player/pause')
  }

  export const next = () => {
    return api.post('/me/player/next')
  }

  export const previous = () => {
    return api.post('/me/player/previous')
  }

  export const putVolume = (volume: Number) => {
    return api.put('/me/player/volume', { volume_percent: volume })
  }
}
