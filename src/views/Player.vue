<template>
    <div class="flex bg-teal h-screen w-screen">
    <div v-if="player.state.status" class="disk-table flex m-auto">

      <div class="flex-1 grid place-content-between w-1/4 my-16 ml-16">
        <RecordInfo :track=player.state.status.item />
        <PlayerActions
          class="mt-auto"
          :playing=player.state.playing
          @pause=player.pauseSong
          @play=player.playSong
          @next=player.nextSong
          @previous=player.previousSong
        />
      </div>

      <Record class="m-auto grid overflow-hidden"
              size="40em"
              :playing=player.state.playing
              :cover=player.state.status.item.album.images[0].url
              :progress=player.state.progressPercent
              @update:progress="player.seekTo"
      />

      <div class="flex-1 w-1/4 h-full grid">
        <Slider class="h-64 mt-auto ml-auto mr-16 mb-16"
                :value=player.state.volumePercent
                @update:value="player.setVolume"
                vertical
        />
      </div>

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

export default defineComponent({
  name: 'Player',
  components: {
    RecordInfo,
    PlayerActions,
    Record,
    Slider
  },

  setup () {
    const player = usePlayer()
    return { player }
  }
})
</script>

<style scoped>
.disk-table {
  @apply rounded;
  @apply bg-yellow;
  width: 90%;
  height: 90%;
  min-width: 80em;
  min-height: 40em;
}
</style>
