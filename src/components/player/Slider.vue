<template>
  <div>
    <input class="slider"
           type="range" orient="vertical"
           min=0 max=100
           v-model=modelValue
    >
  </div>
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

input[type=range] {
  -webkit-appearance: none;
  appearance: none;

  width: 1em;
  height: 100%;
  outline: none;
}

/* Runnable track */
input[type=range]::-webkit-slider-runnable-track {
  @apply bg-pink;
  @apply rounded;
  height: 100%;
  width: 1em;
  cursor: pointer;
}

/* input[type=range]:focus::-webkit-slider-runnable-track {
  background: #367ebd;
} */

input[type=range]::-moz-range-track {
  @apply bg-pink;
  @apply rounded;
  height: 100%;
  width: 1em;
  cursor: pointer;
}

input[type=range]::-ms-track {
  @apply bg-pink;
  @apply rounded;
  height: 100%;
  width: 1em;
  cursor: pointer;
}

/* Thumb */
input[type=range]::-webkit-slider-thumb {
  @apply bg-grey;
  @apply rounded-lg;

  border: none;
  -webkit-appearance: none;
  appearance: none;
  width: 4em;
  height: 2em;
  cursor: pointer;
}

input[type=range]::-moz-range-thumb {
  @apply bg-grey;
  @apply rounded;

  border: none;
  width: 4em;
  height: 2em;
  cursor: pointer;
}
</style>
