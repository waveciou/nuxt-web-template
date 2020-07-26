<template>
  <div class="main">
    <navbar-component />
    <div class="content">
      <div class="wrap">
        <h1 class="title">{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '~/components/model/navbar.vue';

export default {
  data() {
    return {
      title: 'News'
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  components: {
    'navbar-component': navbar,
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

</style>
