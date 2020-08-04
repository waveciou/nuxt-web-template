<template>
  <div class="carousel">
    <div class="carousel__container" v-swiper="swiperOption" ref="carouselRef">
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
    <button class="carousel__btn carousel__btn-prev" title="Prev">
      <span>Prev</span>
    </button>
    <button class="carousel__btn carousel__btn-next" title="Next">
      <span>Next</span>
    </button>
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
        },
        navigation: {
          nextEl: '.carousel__btn-next',
          prevEl: '.carousel__btn-prev',
        },
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

  .carousel {
    position: relative;
  }

  .carousel__item {
    width: 100%;
    height: 0px;
    padding-bottom: 66.66%;
    position: relative;
    overflow: hidden;

    @include min-width(map-get($desktop, sm)) {
      padding-bottom: 30%;
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
    pointer-events: none;

    &.size-desktop {
      display: none;

      @include min-width(map-get($desktop, sm)) {
        display: block;
      }
    }

    &.size-mobile {
      display: block;

      @include min-width(map-get($desktop, sm)) {
        display: none;
      }
    }
  }

  .carousel__pagination {
    display: flex;
    justify-content: center;
  }

  .carousel__btn {
    width: 35px;
    height: 40px;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    transition: opacity 0.4s;

    @include min-width(map-get($desktop, sm)) {
      opacity: 0.4;

      &:hover {
        opacity: 1;
      }
    }

    > span {
      display: none;
    }

    &::before {
      @include fontawesome;
      font-size: map-get($font-size, md);
      color: $color-black;
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.carousel__btn-prev {
      left: 0px;

      &::before {
        content: '\f053';
      }
    }

    &.carousel__btn-next {
      right: 0px;

      &::before {
        content: '\f054';
      }
    }
  }

</style>