<template>
  <div class="main">
    <div class="content">
      <div class="wrap">
        <h1>{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Nuxt Website'
    }
  },
  head() {
    return {
      title: this.title
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

</style>
