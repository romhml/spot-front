<template>
    <div class="flex bg-teal h-screen w-screen">
    <div class="search-overlay relative"
         :class="searchOverlay.show ? '' : 'hidden'"
    >
      <Search />
    </div>
    <div class="disk-table flex m-auto">
      <div class="grid place-content-between w-1/4 my-16 ml-16">
        <RecordInfo :track=player.state.currentTrack />

        <div class="mt-auto">
          <PlayerActions
            class="mt-auto"
            :playing=player.state.playing
            @pause=player.pause
            @play=player.play
            @next=player.next
            @previous=player.previous
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
import { defineComponent, reactive } from 'vue'

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

    const searchOverlay = reactive({ show: false })

    // Player shortcuts
    window.addEventListener('keyup', (event) => {
      if (event.key === ' ') {
        player.state.playing ? player.pause() : player.play()
      } else if (event.key === 'ArrowRight') {
        player.next()
      } else if (event.key === 'ArrowLeft') {
        player.previous()
      } else if (event.key === 'ArrowUp') {
        if (player.state.volumePercent < 100) {
          player.setVolume(Math.min(player.state.volumePercent + 5, 100))
        }
      } else if (event.key === 'ArrowDown') {
        if (player.state.volumePercent > 0) {
          player.setVolume(Math.max(player.state.volumePercent - 5, 0))
        }
      }
    })

    // Search shortcuts
    window.addEventListener('keyup', (event) => {
      if (event.key === 'f' && !searchOverlay.show) {
        searchOverlay.show = true
      } else if (event.key === 'Escape' && searchOverlay.show) {
        searchOverlay.show = false
      }
    })

    return { player, searchOverlay }
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
