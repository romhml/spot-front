<template>
  <VueSlider v-model=localValue
             direction="btt" width="0.8rem"
             contained="true"
             silenced="true"
             :dotOptions=dotOptions
  >
    <template v-slot:dot>
      <div class="dot" />
    </template>
    <template v-slot:tooltip="{ value }">
      <div class="tooltip">{{ value }}</div>
    </template>
    <template v-slot:process="{ style }">
      <div class="vue-slider-process process" :style="[ style, process ]" />
    </template>
  </VueSlider>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default defineComponent({
  components: {
    VueSlider
  },

  props: {
    value: {
      type: Number,
      default: 0
    }
  },

  setup (props: any, { emit }: { emit: any }) {
    const localValue = computed({
      get: () => props.value,
      set: (value) => emit('update:modelValue', value)
    })

    return { localValue }
  }
})
</script>

<style scoped>
.dot {
  @apply rounded;
  @apply bg-grey;
  @apply px-4;
  width: 100%;
  height: 1.2rem;
  transition: all .3s;

}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}

.process {
  @apply bg-pink;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

.process:hover {
  @apply bg-pink;
}

</style>
