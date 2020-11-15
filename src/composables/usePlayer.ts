import { reactive } from 'vue'
import { PlayerApi } from '@/api/spotify/player'
import { Spotify } from '@/types/Spotify'

interface PlayerState {
  status?: Spotify.PlayerStatus
  playing: boolean
  progressPercent: number
  volumePercent: number
}

export default function usePlayer () {
  const state = reactive<PlayerState>({
    status: undefined,
    playing: false,
    progressPercent: 0,
    volumePercent: 0
  })

  const fetchStatus = async () => {
    PlayerApi.get().then((resp) => {
      const data = resp.data
      state.status = data
      state.playing = data.isPlaying
      state.progressPercent = 100 * data.progressMs / data.item.durationMs
      state.volumePercent = data.device.volumePercent
    })
  }

  const pollStatus = () => {
    fetchStatus().then(() => {
      setTimeout(() => {
        pollStatus()
      }, 5000)
    })
  }

  const pauseSong = async () => {
    PlayerApi.pause().then(() => {
      state.playing = false
    })
  }

  const playSong = async () => {
    PlayerApi.play().then(() => {
      state.playing = true
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
    PlayerApi.putVolume(volume).then(() => {
      state.volumePercent = volume
    })
  }

  const seekTo = async (positionPercent: number) => {
    if (state.status) {
      const duration = state.status.item.durationMs
      PlayerApi.seek(Math.round((positionPercent * duration) / 100)).then(() => {
        state.progressPercent = positionPercent
      })
    }
  }

  pollStatus()

  return {
    state,
    nextSong,
    previousSong,
    pauseSong,
    playSong,
    setVolume,
    seekTo
  }
}
