<template>
    <div v-if="player.status" class="flex">
      <div class="vinyl flex">
        <div class="m-auto cover bg-pink">
          <img class="rounded-full w-full h-full"
              :class='player.status.isPlaying ? "rotating" : ""'
              :src="player.status.item.album.images[0].url"
          >
        </div>
      </div>
      <div class="record-info content-end ml-16">
        <PlayerActions
          :isPlaying=player.status.isPlaying

          @pause=pauseSong
          @play=playSong
          @next=nextSong
          @previous=previousSong
        />
        <RecordInfo class="mt-4" :track=player.status.item />
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import usePlayer from '../../composables/usePlayer'
import RecordInfo from './RecordInfo.vue'
import PlayerActions from './PlayerActions.vue'

export default defineComponent({
  name: 'Record',
  components: {
    RecordInfo,
    PlayerActions
  },

  setup () {
    const player = usePlayer()
    player.pollStatus()
    console.log(player)
    return { ...player }
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

  position: relative;
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
