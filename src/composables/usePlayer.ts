import { reactive } from 'vue'
import { PlayerApi } from '@/api/spotify/player'
import { PlayerStatus } from '@/types/PlayerStatus'

interface PlayerState {
  playing: boolean
  info?: PlayerStatus
}

export default function usePlayer () {
  const state: PlayerState = reactive<PlayerState>({
    playing: false,
    info: undefined
  })

  const fetchPlayer = () => {
    PlayerApi.get().then((resp) => {
      console.log(resp)
      state.info = resp.data
      console.log(state)
    })
  }

  return {
    state,
    fetchPlayer
  }
}
