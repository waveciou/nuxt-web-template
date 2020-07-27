<template>
  <div class="main">
    <navbar-component />
    <div class="content">
      <div class="wrap">
        <h1 class="title">{{ title.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '~/components/model/navbar.vue';

export default {
  data() {
    return {
      title: {
        name: 'News',
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
    this.title.head = `${this.$store.state.title} - ${this.title.name}`;
  },
  components: {
    'navbar-component': navbar,
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

</style>
