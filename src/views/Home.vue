<template>
  <div class="m-auto bg-teal flex w-screen h-screen">
    <SignInButton class="m-auto" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SignInButton from '../components/SignInButton.vue'
import useAuth from '../composables/useAuth'

export default defineComponent({
  name: 'Home',
  components: {
    SignInButton
  },

  setup () {
    return useAuth()
  },

  created () {
    const c = this.$route.query.code as string

    if (!this.state.authenticated && c) {
      this.authorize(c).then(() => {
        this.$router.push('/play')
      })
    } else if (this.state.authenticated) {
      this.$router.push('/play')
    }
  }
})
</script>
