<template>
  <div class="bg-yellow flex h-screen w-screen">
    <div class="m-auto">
      <SignInButton />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SignInButton from '../components/SignInButton.vue'

export default defineComponent({
  name: 'SignIn',
  components: {
    SignInButton
  }
})
</script>
