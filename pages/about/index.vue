<template>
  <div class="main">
    <navbar-component />
    <div class="content">
      <div class="wrap">
        <h1 class="title">{{ site.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '~/components/model/navbar.vue';

export default {
  data() {
    return {
      site: {
        name: '',
        head: ''
      },
    }
  },
  head() {
    return {
      title: this.site.head
    }
  },
  fetch() {
    this.$store.dispatch('changePagesTitle', this.$route.name);
    this.site.name = this.$store.state.pages.name;
    this.site.head = this.$store.state.pages.head;
  },
  components: {
    'navbar-component': navbar,
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

</style>
