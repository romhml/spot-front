<template>
  <div :style=addRotateIfVertical>
    <input class="slider"
           type="range"
           min=0 max=100
           v-model=modelValue
    >
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import debounce from 'lodash.debounce'

export default defineComponent({
  name: 'Slider',
  props: {
    value: {
      type: Number,
      default: 0
    },

    vertical: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    addRotateIfVertical () : string {
      return this.vertical ? 'transform: rotate(90deg)' : ''
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

<style scoped lang="scss">
$yellow: #ecc94b;
$pink: #d53f8c;
$grey: #2d3748;
$teal: #38b2ac;

$track-color: $pink;
$thumb-color: $grey;

$thumb-radius: 0.2em;
$thumb-height: 2.5em;
$thumb-width: 1.2em;
$thumb-shadow-size: 0;
$thumb-shadow-blur: 0;
$thumb-shadow-color: rgba(0, 0, 0, .2);
$thumb-border-width: 0;
$thumb-border-color: #eceff1;

$track-width: 100%;
$track-height: 1em;
$track-shadow-size: 0;
$track-shadow-blur: 0;
$track-shadow-color: rgba(0, 0, 0, 0);
$track-border-width: 0;
$track-border-color: $grey;

$track-radius: 5px;
$contrast: 5%;

$ie-bottom-track-color: darken($track-color, $contrast);

@mixin shadow($shadow-size, $shadow-blur, $shadow-color) {
  box-shadow: $shadow-size $shadow-size $shadow-blur $shadow-color, 0 0 $shadow-size lighten($shadow-color, 5%);
}

@mixin track {
  cursor: default;
  height: $track-height;
  transition: all .2s ease;
  width: $track-width;
}

@mixin thumb {
  @include shadow($thumb-shadow-size, $thumb-shadow-blur, $thumb-shadow-color);
  background: $thumb-color;
  border: $thumb-border-width solid $thumb-border-color;
  border-radius: $thumb-radius;
  box-sizing: border-box;
  cursor: default;
  height: $thumb-height;
  width: $thumb-width;
}

output::after {
  transition: transform 0.3s ease-out;
}

[type='range'] {
  transition: filter 0.3s ease-out;

  -webkit-appearance: none;
  background: transparent;
  margin: calc($thumb-height / 2) 0;
  width: $track-width;

  &::-moz-focus-outer {
    border: 0;
  }

  &:focus {
    outline: 0;

    &::-webkit-slider-runnable-track {
      background: lighten($track-color, $contrast);
    }

    &::-ms-fill-lower {
      background: $track-color;
    }

    &::-ms-fill-upper {
      background: lighten($track-color, $contrast);
    }
  }

  &::-webkit-slider-runnable-track {
    @include track;
    @include shadow($track-shadow-size, $track-shadow-blur, $track-shadow-color);
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius;
  }

  &::-webkit-slider-thumb {
    @include thumb;
    -webkit-appearance: none;
    margin-top: calc(((-$track-border-width * 2 + $track-height) / 2 - $thumb-height / 2));
  }

  &::-moz-range-track {
    @include shadow($track-shadow-size, $track-shadow-blur, $track-shadow-color);
    @include track;
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius;
    height: $track-height / 2;
  }

  &::-moz-range-thumb {
    @include thumb;
  }

  &::-ms-track {
    @include track;
    background: transparent;
    border-color: transparent;
    border-width: calc($thumb-height / 2) 0;
    color: transparent;
  }

  &::-ms-fill-lower {
    @include shadow($track-shadow-size, $track-shadow-blur, $track-shadow-color);
    background: $ie-bottom-track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: ($track-radius * 2);
  }

  &::-ms-fill-upper {
    @include shadow($track-shadow-size, $track-shadow-blur, $track-shadow-color);
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: ($track-radius * 2);
  }

  &::-ms-thumb {
    @include thumb;
    margin-top: $track-height / 4;
  }

  &:disabled {
    &::-webkit-slider-thumb,
    &::-moz-range-thumb,
    &::-ms-thumb,
    &::-webkit-slider-runnable-track,
    &::-ms-fill-lower,
    &::-ms-fill-upper {
      cursor: not-allowed;
    }
  }
}

</style>
