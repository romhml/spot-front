<template>
    <div class="flex bg-teal h-screen w-screen">
    <div v-if="player.state.status" class="flex bg-yellow m-auto" :style="{ width: '90vw', height: '90vh' }">

      <div class="flex-1 grid place-content-between w-1/4 my-16 ml-16">
        <RecordInfo :track=player.state.status.item />
        <PlayerActions
          class="mt-auto"
          :isPlaying=player.state.status.isPlaying
          @pause=player.pauseSong
          @play=player.playSong
          @next=player.nextSong
          @previous=player.previousSong
        />
      </div>

      <Record :isPlaying=player.state.status.isPlaying
              :cover=player.state.status.item.album.images[0].url
      />

      <div class="flex-1 h-64 w-1/4 grid">
        <Slider :value=player.state.status.device.volumePercent
                @update:value="player.setVolume"
        />
      </div>

    </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

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
    const canvas = ref(null)
    const player = usePlayer()

    // onMounted(() => {
    //   console.log(canvas.value)

    //   if (canvas.value) {
    //   }
    // })

    player.pollStatus()
    return { player, canvas }
  }
})
</script>

<style scoped>
</style>
