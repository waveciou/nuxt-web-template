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
        name: '',
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
    const name = this.$route.name;
    const route = this.$store.getters.flatRouteData;

    const routeData = route.filter(data => {
      return data.name === this.$route.name;
    });

    this.title.name = routeData.length < 1 ? name : routeData[0].title;
    this.title.head = routeData.length < 1 ? name : `${this.$store.state.title} - ${routeData[0].title}`;
  },
  components: {
    'navbar-component': navbar,
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

</style>
