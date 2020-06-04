<template>
  <div>
    <no-js />
    <nuxt />
  </div>
</template>

<script>
import no_js from '~/components/nojs.vue'

export default {
  components: {
    'no-js': no_js
  },
}
</script>

<style>

</style>
