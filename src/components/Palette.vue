<template>
  <div class="palette w-3/4">
    <div class="color bg-yellow" />
    <div class="color bg-teal" />
    <div class="color bg-pink" />
    <div class="color bg-grey" />
  </div>
</template>

<script>
export default {
  name: 'Palette'
}
</script>

<style>
.palette {
  @apply flex;
  @apply mx-auto;
  @apply flex;
}

.color {
  @apply flex-1;
  @apply px-4;
  @apply py-8;
  @apply m-2;
  @apply rounded;
}
</style>
