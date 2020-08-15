<template>
  <div class="main">
    <div class="content">
      <carousel-component :banner="banner" />
      <section class="section">
        <div class="wrap">
          <h2 class="title">BREAKING NEWS</h2>
          <button @click="ctrlLightboxHandler">lightbox</button>
        </div>
      </section>
    </div>
    <lightbox-component :control="lightbox" @closeLightboxHandler="closeLightboxHandler"></lightbox-component>
  </div>
</template>

<script>
import carousel from '~/components/carousel.vue';
import lightbox from '~/components/lightbox.vue';

export default {
  data() {
    return {
      title: {
        name: 'Home',
        head: ''
      },
      lightbox: false,
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
    'lightbox-component': lightbox
  },
  head() {
    return {
      title: this.title.head
    }
  },
  fetch() {
    this.title.head = this.$store.state.siteName;
  },
  methods: {
    ctrlLightboxHandler() {
      this.lightbox = !this.lightbox;
    },
    closeLightboxHandler() {
      this.lightbox = false;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

</style>
