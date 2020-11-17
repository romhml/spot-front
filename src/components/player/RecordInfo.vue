<template>
  <div class="record-info flex flex-col">
    <p ref="trackRef" class="text-4xl overflow-auto-scroll">
    <span v-if="track"> {{ track.name }}</span>
    <span v-else>Press Play!</span>
    </p>
    <span class="separator" />
      <p ref="artistRef" class="text-3xl overflow-auto-scroll">
      <span v-if="track && track.artists !== []" > {{ track.artists[0].name }}</span>
      <span v-else>Or type F to search a song</span>
      </p>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
// import { Spotify } from '../../types/Spotify'

export default defineComponent({
  name: 'RecordInfo',

  setup () {
    const trackRef = ref(null)
    const artistRef = ref(null)

    const autoScroll = (element?: any) => {
      if (element) {
        window.addEventListener('load', () => {
          const scroller = { backtracking: false, waiting: 0 }
          self.setInterval(() => {
            if (!scroller.backtracking && scroller.waiting === 0) {
              if (element.scrollLeft < element.scrollWidth - element.clientWidth) {
                element.scrollTo(element.scrollLeft + 1, 0)
              } else {
                scroller.backtracking = true
                scroller.waiting = 1
              }
            } else if (scroller.waiting === 0) {
              if (element.scrollLeft > 0) {
                element.scrollTo(element.scrollLeft - 1, 0)
              } else {
                scroller.backtracking = false
                scroller.waiting = 1
              }
            } else {
              scroller.waiting = (scroller.waiting > 20) ? 0 : scroller.waiting + 1
            }
          }, 50)
        })
      }
    }

    onMounted(() => {
      autoScroll(trackRef.value)
      autoScroll(artistRef.value)
    })

    return { trackRef, artistRef }
  },

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
  @apply bg-pink;

  font-family: 'Bebas Neue', cursive;
  text-align: left;
  width: 20rem;
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

.separator {
  @apply bg-yellow;
  @apply rounded-r;
  display: inline-block;
  height: 0.3rem;
  width: 40%;
}
</style>
