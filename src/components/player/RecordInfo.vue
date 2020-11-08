<template>
  <div class="record-info">
    <p ref=trackRef class="text-5xl my-auto overflow-auto-scroll">{{ track.name }}</p>
    <p ref=artistsRef class="text-3xl overflow-auto-scroll">{{ track.artists[0].name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { Spotify } from '../../types/Spotify'

export default defineComponent({
  name: 'RecordInfo',

  // // TODO Implement autoscrolling on overflow
  // // TODO Look for an alternative in Vue3 to acces this.$els
  // setup () {
  //   const trackRef = ref(null)

  //   onMounted(() => {
  //     console.log(trackRef.value)
  //     const track: any = trackRef.value

  //     if (track) {
  //       const scrollWidth = track.scrollWidth
  //       console.log(track)
  //       window.addEventListener('load', () => {
  //         self.setInterval(() => {
  //           if (track.scrollLeft !== scrollWidth) {
  //             track.value.scrollTo(scrollWidth + 1, 0)
  //           }
  //         }, 15)
  //       })
  //     }
  //   })

  //   return { trackRef }
  // },

  props: {
    track: Object // TODO look to use Spotify.Track
  }
})
</script>

<style scoped>
.record-info {
    @apply border-8;
    @apply rounded-xl;
    @apply px-4;
    @apply border-pink;

    font-family: 'Bebas Neue', cursive;
    text-align: left;
    width: 25rem;
    height: 9rem;
}

.overflow-auto-scroll {
  white-space: nowrap;
  overflow: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;
}

.overflow-auto-scroll::-webkit-scrollbar {
  display: none;
}

</style>
