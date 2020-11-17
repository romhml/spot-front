<template>
  <div :style='{
    width: width,
    height: height,
  }'>
    <slot name="text" ref=autoScroll class="auto-scroll" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Scroller',

  props: {
    height: String,
    width: String
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
