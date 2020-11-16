<template>
  <input type=text placeholder="Search" @input=emitInput autofocus autocomplete="off">
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import debounce from 'lodash.debounce'

export default defineComponent({
  name: 'SearchBar',

  setup (props: {}, { emit }: { emit: any }) {
    const emitInput = debounce((event) => {
      emit('search', event.target.value)
    }, 500)

    return { emitInput }
  }
})
</script>

<style scoped>

input[type=text] {
  font-size: 5em;
  font-family: 'Bebas Neue', cursive;
  color: white;
  border: none;
  background: none;
}

input[type=text]:focus {
  outline: none
}
</style>
