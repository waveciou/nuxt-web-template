<template>
  <div class="main">
    <div class="content">
      <carousel-component :banner="banner" />
      <section class="section">
        <div class="wrap">
          <h2 class="title">BREAKING NEWS</h2>
          <newsBlock-component :album="news.album" :article="news.article" />
        </div>
      </section>
    </div>
    <lightbox-component :control="lightbox" @closeLightboxHandler="closeLightboxHandler"></lightbox-component>
  </div>
</template>

<script>
import carousel from '~/components/carousel.vue';
import lightbox from '~/components/lightbox.vue';
import newsBlock from '~/components/home_newsBlock.vue';

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
      ],
      news: {
        album: [
          {
            id: 1,
            name: 'news-1',
            src: 'https://fakeimg.pl/800x800/'
          },
          {
            id: 2,
            name: 'news-2',
            src: 'https://fakeimg.pl/800x800/'
          },
          {
            id: 3,
            name: 'news-3',
            src: 'https://fakeimg.pl/800x800/'
          },
        ],
        article: [
          {
            id: 1,
            title: 'News Title',
            caption: 'The News captions',
          },
          {
            id: 2,
            title: 'News Title',
            caption: 'The News captions',
          },
          {
            id: 3,
            title: 'News Title',
            caption: 'The News captions',
          },
        ]
      }
    }
  },
  components: {
    'carousel-component': carousel,
    'lightbox-component': lightbox,
    'newsBlock-component': newsBlock,
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
