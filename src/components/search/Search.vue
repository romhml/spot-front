<template>
  <div class="text-white">
    <SearchBar class="w-3/4 mt-8" @search="search" />
    <div class="flex mt-16 mx-auto">
      <Track v-for="track in state.tracks" :key=track.id
             :track=track
             class="mx-2"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent /* , EmitsOptions, SetupContext */ } from 'vue'
import SearchBar from './SearchBar.vue'
import Track from './Track.vue'

import useSearch from '../../composables/useSearch'

export default defineComponent({
  name: 'Search',

  components: {
    SearchBar,
    Track
  },

  setup (props: {}/* , ctx: SetupContext<EmitsOptions> */) {
    const { state, search } = useSearch()
    return { state, search }
  }
})
</script>

<style scoped>

</style>
