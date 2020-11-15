import { reactive } from 'vue'
import { PlayerApi } from '@/api/spotify/player'
import { Spotify } from '@/types/Spotify'

interface PlayerState {
  currentTrack?: Spotify.Track
  coverUrl?: string
  playing: boolean
  progressPercent: number
  volumePercent: number
}

export default function usePlayer () {
  const state = reactive<PlayerState>({
    currentTrack: undefined,
    playing: false,
    progressPercent: 0,
    volumePercent: 0
  })

  const fetchStatus = async () => {
    PlayerApi.get().then((resp) => {
      const data = resp.data
      state.currentTrack = data.item
      state.coverUrl = data.item.album.images[0].url
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
    if (state.currentTrack) {
      const duration = state.currentTrack.durationMs
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
