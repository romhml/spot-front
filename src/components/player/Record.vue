<template>
  <div>
    <svg :width=size :height=size
          viewBox="-120 -120 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <circle cx="0" cy="0" r="100" fill="#2d3748"/>
      <!--<line x1="110" y1="-100" x2="110" y2="50"
        stroke=#d53f8c stroke-width=6
        stroke-linecap="round"
        transition="rotate .5s ease"
        :transform="`rotate(0, 100, -100)`"
        />-->
      <!-- 6 to 24 -->
      <circle cx="0" cy="0" r="53" fill="#D53F8C" />
      <mask id="centerMask" mask-type="alpha" maskUnits="userSpaceOnUse" x="-55" y="-55" width="110" height="110">
      <circle cx="0" cy="0" r="50" fill="#2D3748" />
      </mask>
      <g mask="url(#centerMask)"
         class="vinyl rotating"
         :class="playing ? '' : 'freeze-animations'">
      <rect x="-55" y="-55" width="110" height="110" fill="url(#coverPattern)" />
      </g>

      <defs>
      <pattern id="coverPattern" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#cover" transform="translate(-0.00113379) scale(0.00156604)" />
      </pattern>
      <image id="cover" width="640" height="640" :xlink:href=cover object-fit=cover />
      </defs>
    </svg>

    <Slider v-model:value=progressValue />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Slider from './Slider.vue'

export default defineComponent({
  name: 'Record',
  components: {
    Slider
  },

  props: {
    playing: Boolean,
    cover: String,
    duration: Number,

    size: {
      type: String,
      default: '30rem'
    },

    progress: {
      type: Number,
      default: 0
    }
  },

  setup (props: any, { emit }: { emit : any }) {
    const progressValue = computed({
      get: () => props.progress,
      set: (progress: number) => {
        emit('update:progress', progress)
      }
    })

    return { progressValue }
  }
})

</script>

<style scoped>
.track {
  font-family: 'Bebas Neue', cursive;
}

@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.rotating {
  -webkit-animation: rotating 7.2s linear infinite;
  -moz-animation: rotating 7.2s linear infinite;
  -ms-animation: rotating 7.2s linear infinite;
  -o-animation: rotating 7.2s linear infinite;
  animation: rotating 7.2s linear infinite;
}

.freeze-animations {
  -webkit-animation-play-state: paused;
  -moz-animation-play-state: paused;
  -o-animation-play-state: paused;
  animation-play-state: paused;
}
</style>
