<template>
  <input class="slider"
         type="range" orient="vertical"
         min=0 max=100
         v-model=modelValue
  >
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import debounce from 'lodash.debounce'

export default defineComponent({
  props: {
    value: {
      type: Number,
      default: 0
    }
  },

  setup (props: any, { emit }: { emit: any }) {
    const modelValue = computed({
      get: () => props.value,
      set: debounce((value: number) => {
        emit('update:value', value)
      }, 200)

    })

    return { modelValue }
  }
})
</script>

<style scoped>
.slider {
  -webkit-appearance: none;
  appearance: none;

  @apply bg-pink;
  width: 1rem;
  height: 100%;
  outline: none;
}

.slider::-webkit-slider-thumb {
  @apply bg-grey;
  @apply rounded-lg;

  -webkit-appearance: none;
  appearance: none;
  width: 4rem;
  height: 2rem;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  @apply bg-grey;
  @apply rounded;

  width: 4rem;
  height: 2rem;
  cursor: pointer;
}

</style>
