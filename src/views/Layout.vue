<template>
  <div class="window flex">
    <div class="panel w-1/4 h-full" />
    <div class="panel w-1/2 h-full" />
    <div class="panel w-1/4 h-full" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout'
})

</script>

<style scoped>

.window {
  @apply bg-yellow;
  @apply w-screen;
  @apply h-screen;
}

.panel {
  @apply border-grey;
  @apply border-2;
  @apply rounded;
  @apply mx-2;
}
</style>
