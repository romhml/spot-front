<template>
  <div class="bg-yellow flex h-screen w-screen">
    <div class="flex items-center h-full w-full" v-if="state.authenticated">
      <Record class="m-auto"/>
    </div>
    <div class="m-auto" v-else>
      <SignInButton />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SignInButton from '../components/SignInButton.vue'
import Record from '../components/player/Record.vue'

// import Palette from '../components/Palette.vue'
import useAuth from '../composables/useAuth'

export default defineComponent({
  name: 'Home',
  components: {
    SignInButton,
    Record
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
