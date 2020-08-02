<template>
    <div class="carousel" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banner" :key="item.name">
          <figure class="carousel__item">
            <img :src="item.src[0]" :alt="item.name" class="carousel__image size-desktop">
            <img :src="item.src[1]" :alt="item.name" class="carousel__image size-mobile">
          </figure>
        </div>
      </div>
      <div class="swiper-pagination carousel__pagination"></div>
    </div>
</template>

<script>
import NoSSR from 'vue-no-ssr';

export default {
  data() {
    return {
      swiperOption: {
        lazy: {
          loadPrevNext: true
        },
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components: {
    'client-only': NoSSR,
  },
  props: {
    banner: Array
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";
  @import "~/assets/scss/plugins/_swiper.scss";

  .carousel__item {
    width: 100%;
    height: 0px;
    padding-bottom: 66.66%;
    position: relative;
    overflow: hidden;

    @include min-width(map-get($tablet, sm)) {
      padding-bottom: 29.1%;
    }
  }

  .carousel__image {
    width: 100%;
    height: 100%;
    display: none;
    position: absolute;
    top: 0px;
    left: 0px;
    object-fit: cover;

    &.size-desktop {
      display: none;

      @include min-width(map-get($tablet, sm)) {
        display: block;
      }
    }

    &.size-mobile {
      display: block;

      @include min-width(map-get($tablet, sm)) {
        display: none;
      }
    }
  }

  .carousel__pagination {
    display: flex;
    justify-content: center;
  }

</style>