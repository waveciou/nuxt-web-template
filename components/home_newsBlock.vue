<template>
  <div class="newsBlock">
    <div class="newsBlock__album">
      <div class="newsBlock__album-container" v-swiper="swiperOption" ref="carouselRef">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in album" :key="item.id">
            <figure class="newsBlock__album-item">
              <img :src="item.src" :alt="item.name" class="newsBlock__album-image">
            </figure>
          </div>
        </div>
        <div class="swiper-pagination newsBlock__album-pagination"></div>
      </div>
    </div>
    <div class="newsBlock__content">
      <ul class="newsBlock__list">
        <li v-for="item in article" :key="item.id">
          <a href="javascript:;" class="newsBlock__list-item">
            <div class="newsBlock__list-title">{{ item.title }}</div>
            <div class="newsBlock__list-caption">{{ item.caption }}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>


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
          delay: 3000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      }
    }
  },
  props: {
    album: Array,
    article: Array
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";
  @import "~/assets/scss/plugins/_swiper.scss";

  .newsBlock {
    width: 100%;
    max-width: 1024px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin: 3rem auto;
  }

  .newsBlock__album,
  .newsBlock__content {
    width: 50%;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .newsBlock__album-item {
    width: 100%;
    height: 0px;
    padding-bottom: 100%;
    position: relative;
    overflow: hidden;
  }

  .newsBlock__album-image {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    object-fit: cover;
  }

  .newsBlock__list-item {
    display: block;
    margin-bottom: 1rem;
  }

  .newsBlock__list-title,
  .newsBlock__list-caption {
    line-height: 1.6em;
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .newsBlock__list-title {
    font-size: map-get($font-size, md);
  }

  .newsBlock__list-caption {
    color: $color-gray-dark;
  }

</style>