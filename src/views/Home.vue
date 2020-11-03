<template>
  <div class="home">
    <SignIn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SignIn from '../components/auth/SignIn.vue'

export default defineComponent({
  name: 'Home',
  components: {
    SignIn
  },
  created () {
    const c = this.$route.query.code
    console.log(c)
  }
})
</script>
