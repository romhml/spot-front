<template>
  <div>
    <svg :width=size :height=size
          viewBox="-100 -100 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <circle cx="0" cy="0" r="100" fill="#2D3748"/>
      <!-- <line x1="100" y1="-100" x2="100" y2="70"
            style="stroke:#2D3748;stroke-width:2"
      />-->

      <circle cx="0" cy="0" r="53" fill="#D53F8C" />
      <mask id="centerMask" mask-type="alpha" maskUnits="userSpaceOnUse" x="-55" y="-55" width="110" height="110">
        <circle cx="0" cy="0" r="50" fill="#2D3748" />
      </mask>
      <g mask="url(#centerMask)"
         class="vinyl rotating"
        :class="isPlaying ? '' : 'freeze-animations'">
        <rect x="-55" y="-55" width="110" height="110" fill="url(#coverPattern)" />
      </g>

      <defs>
        <pattern id="coverPattern" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#cover" transform="translate(-0.00113379) scale(0.00156604)" />
        </pattern>
        <image id="cover" width="640" height="640" :xlink:href=cover object-fit=cover />
      </defs>

    </svg>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Record',
  components: {
  },

  props: {
    isPlaying: Boolean,
    cover: String,
    size: {
      type: String,
      default: '30rem'
    }
  },

  setup (props: any) {
    const canvas = ref(null)
    // onMounted(() => {
    //   console.log(canvas.value)

    //   if (canvas.value) {
    //   }
    // })

    return { canvas }
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
