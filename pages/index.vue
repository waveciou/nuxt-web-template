<template>
  <div class="main">
    <div class="content">
      <carousel-component :banner="banner" />
      <div class="wrap">
        
      </div>
    </div>
  </div>
</template>

<script>
import carousel from '~/components/carousel.vue';

export default {
  data() {
    return {
      title: {
        name: 'Home',
        head: ''
      },
      banner: [
        {
          name: 'banner-1',
          src: ['https://fakeimg.pl/1920x560/', 'https://fakeimg.pl/1024x682/']
        },
        {
          name: 'banner-2',
          src: ['https://fakeimg.pl/1920x560/', 'https://fakeimg.pl/1024x682/']
        },
        {
          name: 'banner-3',
          src: ['https://fakeimg.pl/1920x560/', 'https://fakeimg.pl/1024x682/']
        }
      ]
    }
  },
  components: {
    'carousel-component': carousel,
  },
  head() {
    return {
      title: this.title.head
    }
  },
  fetch() {
    this.title.head = this.$store.state.siteName;
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

</style>
