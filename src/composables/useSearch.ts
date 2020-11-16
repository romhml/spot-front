import { reactive } from 'vue'
import { SearchApi } from '@/api/spotify/search'
import { Spotify } from '@/types/Spotify'

interface SearchState {
  tracks: Array<Spotify.Track>
  artists: Array<Spotify.Artist>
}

export default function usePlayer () {
  const state = reactive<SearchState>({
    tracks: [],
    artists: []
  })

  const search = async (query: string) => {
    if (query === '') {
      state.tracks = []
      state.artists = []
    } else {
      SearchApi.get(query, 5, 'track').then((resp: any) => {
        state.tracks = resp.data.tracks.items
        // state.artists = resp.data.artists.items
      })
    }
  }

  return {
    state,
    search
  }
}
