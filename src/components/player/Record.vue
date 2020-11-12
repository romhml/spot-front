<template>
      <div class="m-auto flex-none vinyl flex">
        <div class="m-auto cover bg-pink">
          <img class="rounded-full w-full h-full"
              :class='isPlaying ? "rotating" : ""'
              :src="cover"
          >
        </div>
      </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Record',
  components: {
  },

  props: {
    isPlaying: Boolean,
    cover: String
  },

  setup (props: any) {
    const canvas = ref(null)
    // onMounted(() => {
    //   console.log(canvas.value)

    //   if (canvas.value) {
    //   }
    // })

    return { canvas }
  }
})

</script>

<style scoped>
.track {
    font-family: 'Bebas Neue', cursive;
}

@keyframes rotating {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}

.rotating {
    animation: rotating 7.2s linear infinite;
}

.vinyl {
  @apply rounded-full;
  @apply bg-grey;
  @apply border-4;
  @apply border-pink;

  position: relative !important;
  width: 40rem;
}

.vinyl:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.cover {
  @apply rounded-full;
  @apply border-8;
  @apply border-teal;

  width: 50%;
  height: 50%;
}

</style>
