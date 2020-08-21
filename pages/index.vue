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
import newsBlock from '~/components/newsBlock.vue';

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
            title: 'Lorem ipsum dolor sit amet',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel massa et justo mollis faucibus et nec ligula. Nunc vel orci quis lectus tincidunt egestas. Suspendisse potenti. Integer tristique at mauris ut mattis. Nullam quis blandit diam. Suspendisse potenti. Donec leo magna, dictum non imperdiet eu, sollicitudin in ex. Nulla facilisi. Donec varius felis quis lobortis pretium. Nunc et augue nec urna fermentum consequat. Morbi augue sem, fermentum quis volutpat sed, pretium eu mi.',
          },
          {
            id: 2,
            title: 'Sed sed vestibulum nulla',
            caption: 'Sed sed vestibulum nulla. Donec ac tellus egestas, malesuada ipsum sit amet, eleifend urna. Nullam pharetra varius rutrum. Sed dui metus, porta non imperdiet eu, luctus at neque. Quisque posuere ornare sapien eu pretium. Fusce consectetur dapibus ornare. Suspendisse nec tortor luctus, hendrerit urna nec, facilisis sapien. Donec vel neque eu nulla vehicula rhoncus. Aliquam bibendum, quam sit amet tincidunt imperdiet, sapien diam consequat ligula, a ultrices turpis orci ut nulla. Cras vitae elit quis nisi pharetra auctor. Sed non erat at ex venenatis mollis. Nulla facilisi. Nulla sed nulla congue, tincidunt metus quis, convallis tellus. Nam venenatis elit at mauris porta, et imperdiet nisl dignissim. In sed malesuada quam. Ut bibendum erat sit amet neque condimentum tristique.',
          },
          {
            id: 3,
            title: 'Aliquam scelerisque eget ipsum in tempus',
            caption: 'Sed sed vestibulum nulla, ac sagittis tortor. Phasellus nec metus malesuada, varius ante ut, consequat lorem. In turpis neque, congue nec luctus vitae, convallis in ex. Aenean placerat ipsum est, id faucibus nibh condimentum quis. Aliquam scelerisque eget ipsum in tempus. Vivamus egestas tristique elit. Sed tellus tellus, imperdiet sit amet diam vel, rhoncus tristique velit. Sed vitae porta tortor. Vivamus auctor elementum nulla non fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
