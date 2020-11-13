<template>
  <div class="flex justify-center">
    <button class="player-action px-4 mr-2" @click="previous"> ◄◄ </button>
    <button class="player-action px-8" v-if="isPlaying" @click="pause"> || </button>
    <button class="player-action px-8" v-else @click="play"> ► </button>
    <button class="player-action px-4 ml-2" @click="next"> ►► </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// import usePlayer from '../../composables/usePlayer'

export default defineComponent({
  name: 'PlayerActions',

  // eslint disable-next-line
  setup (props: Object, { emit } : { emit: any }) {
    const play = () => {
      emit('play')
    }

    const pause = () => {
      emit('pause')
    }

    const next = () => {
      emit('next')
    }

    const previous = () => {
      emit('previous')
    }

    return { play, pause, next, previous }
  },

  props: {
    isPlaying: Boolean
  }
})
</script>

<style scoped>

.player-action {
  @apply py-4;
  @apply border-4;
  @apply rounded;
  @apply border-pink;
  @apply bg-teal;
  @apply font-black;
  @apply text-pink;
}
</style>
