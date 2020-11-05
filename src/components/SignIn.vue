<template>
    <button @click="spotifyRedirect">
      <span class="text-xl">Connect with</span>
      <img class="ml-2 w-32" src="../assets/spotify.png">
    </button>
</template>

<script lang="ts">
import useAuth from '../composables/useAuth'

export default {
  name: 'SignIn',

  setup () {
    return useAuth()
  }
}
</script>

<style scoped>

button {
  @apply bg-teal;
  @apply rounded-full;

  @apply py-4;
  @apply px-8;

  @apply text-white;
  @apply font-semibold;
  @apply items-center;
  @apply flex;
}

focus:button {
  @apply outline-none;
}
</style>
