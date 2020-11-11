<template>
    <div v-if="player.status" class="flex" :style="{ width: '90vw', height: '90vh' }">

      <div class="flex-1 grid place-content-between w-1/4 my-16 ml-16">
        <RecordInfo :track=player.status.item />
        <PlayerActions
          class="mt-auto"
          :isPlaying=player.status.isPlaying
          @pause=pauseSong
          @play=playSong
          @next=nextSong
          @previous=previousSong
        />
      </div>

      <div class="m-auto flex-none vinyl flex">
        <div class="m-auto cover bg-pink">
          <img class="rounded-full w-full h-full"
              :class='player.status.isPlaying ? "rotating" : ""'
              :src="player.status.item.album.images[0].url"
          >
        </div>
      </div>

      <div class="flex-1 w-1/4 grid">
        <Slider :value=player.status.device.volumePercent
                @update:value="setVolume($event)"
        />
      </div>

    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

import usePlayer from '../../composables/usePlayer'
import Slider from './Slider.vue'
import RecordInfo from './RecordInfo.vue'
import PlayerActions from './PlayerActions.vue'

export default defineComponent({
  name: 'Record',
  components: {
    RecordInfo,
    PlayerActions,
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
    return { ...player, canvas }
  }
})
</script>

<style scoped>
.track {
    font-family: 'Bebas Neue', cursive;
}

@keyframes rotating {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}

.rotating {
    animation: rotating 7.2s linear infinite;
}

.vinyl {
  @apply rounded-full;
  @apply bg-grey;
  @apply border-4;
  @apply border-pink;

  position: relative !important;
  width: 40rem;
}

.vinyl:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.cover {
  @apply rounded-full;
  @apply border-8;
  @apply border-teal;

  width: 50%;
  height: 50%;
}

</style>
