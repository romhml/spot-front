<template>
  <div class="home">
    <h2 v-if="state.authenticated">Authenticated!</h2>
    <div v-else>
      <h2>Not authenticated :(</h2>
      <h2>{{ state.authenticated }}</h2>
      <SignIn />
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SignIn from '../components/auth/SignIn.vue'
import useAuth from '../composables/useAuth'

export default defineComponent({
  name: 'Home',
  components: {
    SignIn
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
