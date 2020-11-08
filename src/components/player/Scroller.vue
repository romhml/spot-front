<template>
  <div :style='{
    width: width,
    height: height,
  }'>
    <slot name="text" ref=autoScroll class="auto-scroll" />
  </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
// import { Spotify } from '../../types/Spotify'

export default defineComponent({
  name: 'Scroller',

  props: {
    height: String,
    width: String
  },

  // TODO Implement autoscrolling on overflow
  // TODO Look for an alternative in Vue3 to acces this.$els
  setup () {
    const autoScroll = ref(null)

    onMounted(() => {
      console.log(autoScroll.value)
    })

    // const track = document.getElementById('#track')
    // console.log(track)

    // if (track) {
    //   const scrollWidth = track.scrollWidth

    //   window.addEventListener('load', () => {
    //     self.setInterval(() => {
    //       if (track.scrollLeft !== scrollWidth) {
    //         track.scrollTo(scrollWidth + 1, 0)
    //       }
    //     }, 15)
    //   })
    // }

    return { autoScroll }
  }
})
</script>

<style scoped>
.auto-scroll {
  white-space: nowrap;
  overflow: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;
}

.auto-scroll::-webkit-scrollbar {
  display: none;
}

</style>
