<template>
    <button class="bg-green-400 text-white hover:bg-green-600
                   focus:outline-none py-2 px-4 rounded font-semibold text-md"
            @click="onClick"
    >
      <span class="m-auto font-semibold">Connect</span>
      <!-- <img class="ml-2"
          src="@/assets/spotify.png"
          height="0.25rem"
          width="100px"
      > -->
    </button>
</template>

<script lang="ts">

import { AuthModule } from './index'

export default {
  name: 'SignIn',

  methods: {
    onClick () {
      AuthModule.spotifyRedirect()
    }
  }
}
</script>
