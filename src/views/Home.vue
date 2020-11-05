<template>
  <div class="bg-yellow flex w-full h-screen">
    <div class="m-auto h-full w-full" v-if="state.authenticated">
      <Player />
    </div>
    <div class="m-auto" v-else>
      <SignIn />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SignIn from '../components/SignIn.vue'
import Player from '../components/Player.vue'

// import Palette from '../components/Palette.vue'
import useAuth from '../composables/useAuth'

export default defineComponent({
  name: 'Home',
  components: {
    SignIn,
    Player
  },

  setup () {
    return useAuth()
  },

  created () {
    const c = this.$route.query.code as string
    if (!this.state.authenticated && c) {
      this.authorize(c)
      this.$router.push('/')
    }
  }
})
</script>
