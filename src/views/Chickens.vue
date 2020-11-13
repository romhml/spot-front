<template>
  <div class="w-screen h-screen bg-teal">
    <div class="flex justify-center content-center">
      <p class="quatre flex-none text-pink">4</p>
      <Record class="mx-8 my-auto flex-none"
              size="20em"
              isPlaying=true
              cover="https://i.scdn.co/image/ab67616d0000b273ee8dce7a0f5e9cce92cfb2ec" />
      <p class="quatre flex-none text-pink">4</p>
    </div>
    <p class="text text-grey">
      Ain't Nobody Here But Us Chickens ♫
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// TODO Record component should be a simple record turning
// Which will be used here as 0
import Record from '../components/player/Record.vue'

export default defineComponent({
  components: {
    Record
  }
})
</script>

<style scoped>
.text {
  font-size: 2em;
  font-weight: 'bold';
  font-family: 'Poppins', sans-serif;
}

.quatre {
  font-size: 20em;
  font-family: 'Bebas Neue', cursive;
}
</style>
