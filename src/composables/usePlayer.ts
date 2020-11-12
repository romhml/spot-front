import { reactive } from 'vue'
import { PlayerApi } from '@/api/spotify/player'
import { Spotify } from '@/types/Spotify'

interface PlayerState {
  status?: Spotify.PlayerStatus
}

export default function usePlayer () {
  const state = reactive<PlayerState>({
    status: undefined
  })

  const fetchStatus = async () => {
    PlayerApi.get().then((resp) => {
      state.status = resp.data
    })
  }

  const pollStatus = () => {
    fetchStatus().then(() => {
      console.log('Polled PlayerStatus')

      setTimeout(() => {
        pollStatus()
      }, 5000)
    })
  }

  const pauseSong = async () => {
    PlayerApi.pause().then(() => {
      setTimeout(() => {
        fetchStatus()
      }, 500)
    })
  }

  const playSong = async () => {
    PlayerApi.play().then(() => {
      setTimeout(() => {
        fetchStatus()
      }, 500)
    })
  }

  const nextSong = async () => {
    PlayerApi.next().then(() => {
      setTimeout(() => {
        fetchStatus()
      }, 500)
    })
  }

  const previousSong = async () => {
    PlayerApi.previous().then(() => {
      setTimeout(() => {
        fetchStatus()
      }, 500)
    })
  }

  const setVolume = async (volume: number) => {
    console.log('setting volume')
    PlayerApi.putVolume(volume).then(() => {
      setTimeout(() => {
        fetchStatus()
      }, 500)
    })
  }

  return {
    state,
    pollStatus,
    nextSong,
    previousSong,
    pauseSong,
    playSong,
    setVolume
  }
}
