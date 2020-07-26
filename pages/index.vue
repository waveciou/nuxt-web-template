<template>
  <div class="main">
    <div class="content">
      <div class="wrap">
        <h1>{{ title.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: {
        name: 'Home',
        head: ''
      },
    }
  },
  head() {
    return {
      title: this.title.head
    }
  },
  fetch() {
    this.title.head = this.$store.state.website.title;
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

</style>
