<template>
  <div class="flex bg-teal h-screen w-screen">
    <div class="search-overlay relative">
      <Search />
    </div>
    <div class="disk-table flex m-auto">
      <div class="grid place-content-between w-1/4 my-16 ml-16">
        <RecordInfo :track=player.state.currentTrack />

        <div class="mt-auto">
          <PlayerActions
            class="mt-auto"
            :playing=player.state.playing
            @pause=player.pauseSong
            @play=player.play
            @next=player.next
            @previous=player.previousSong
          />
          <Slider class="w-full mt-8"
                  :value=player.state.volumePercent
                  @update:value="player.setVolume"
          />
        </div>
      </div>

      <Record class="m-auto"
              size="45em"
              :playing=player.state.playing
              :cover=player.state.coverUrl
              :progress=player.state.progressPercent
              @update:progress="player.seekTo"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import usePlayer from '../composables/usePlayer'

import RecordInfo from '../components/player/RecordInfo.vue'
import PlayerActions from '../components/player/PlayerActions.vue'
import Record from '../components/player/Record.vue'
import Slider from '../components/player/Slider.vue'

import Search from '../components/search/Search.vue'

export default defineComponent({
  name: 'Player',
  components: {
    RecordInfo,
    PlayerActions,
    Record,
    Slider,
    Search
  },

  setup (props: {}, { emit }: { emit: any}) {
    const player = usePlayer()
    player.pollStatus()
    return { player }
  }
})
</script>

<style scoped>
.hide {
  display: none
}

.search-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5)
}

.disk-table {
  @apply rounded;
  @apply bg-yellow;
  width: 90%;
  height: 95%;
  min-width: 80em;
  min-height: 40em;
}
</style>
