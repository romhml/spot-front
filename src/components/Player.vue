<template>
  <div>
    <div class="bg-grey rounded-full vinyl">
    </div>
  </div>
</template>

<script>
import usePlayer from '../composables/usePlayer'

export default {
  name: 'Player',
  setup () {
    const { player, fetchPlayer } = usePlayer()
    fetchPlayer()
    console.log(player)
    return { }
  }
}
</script>

<style scoped>
.vinyl {
  @apply rounded-full;
  position: relative;
  width: 30rem;
}

.vinyl:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
