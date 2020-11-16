<template>
  <div class="text-align-left" @click=play(track.uri)>
    <img class="border-4 border-white" :src="track.album.images[0].url" />
    <p class="text-2xl">
      {{ track.name }}
    </p>
    <p class="text-xl">
      {{ track.artists[0].name }}
    </p>
  </div>
</template>

<script lang="ts">
import usePlayer from '../../composables/usePlayer'

export default {
  name: 'Track',

  props: {
    track: Object
  },

  setup (props: any, { emit }: { emit: any }) {
    const { play } = usePlayer()
    return { play }
  }
}
</script>

<style scoped>

p {
  font-family: 'Bebas Neue', cursive;
}
</style>
