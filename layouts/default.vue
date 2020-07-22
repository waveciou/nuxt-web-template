<template>
  <div class="wrapper">
    <noscript-component />
    <div class="wrapper__page" @scroll="onScrollHandler($event)">
      <header-component :scrollValue="scrollValue" />
      <menu-component />
      <transition name="fade" >
        <nuxt />
      </transition>
      <footer-component />
      <div class="float-block">
        <a href="javascript:;" class="float-block__top-btn" @click.stop="scrollToTop">TOP</a>
      </div>
    </div>
    <div class="mobile-menu__overlay"></div>
    <mobile-menu-component />
  </div>
</template>

<script>
import noscript from '~/components/model/noscript.vue';
import header from '~/components/model/header.vue';
import menu from '~/components/model/menu.vue';
import footer from '~/components/model/footer.vue';
import mobileMenu from '~/components/model/menu-mobile.vue';

export default {
  data() {
    return {
      scrollValue: 0
    }
  },
  components: {
    'noscript-component': noscript,
    'header-component': header,
    'menu-component': menu,
    'footer-component': footer,
    'mobile-menu-component': mobileMenu
  },
  methods: {
    onScrollHandler(el) {
      this.scrollValue = el.srcElement.scrollTop;
    },
    scrollToTop() {
      // let $wrapperPage = document.querySelector('.wrapper__page');

      // Velocity($wrapperPage, 'scroll', {
      //   duration: 800,
      //   offset: 0,
      //   mobileHA: false
      // });
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/utils/_utils.scss";

  html, body,
  #__nuxt, #__layout, .wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .wrapper__page {
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    -o-overflow-scrolling: touch;
  }

  .float-block {
    position: fixed;
    right: 40px;
    bottom: 80px;
  }

  .float-block__top-btn {
    width: 60px;
    height: 60px;
    display: block;
    border-radius: 100%;
    text-align: center;
    line-height: 60px;
    background-color: $color-blue;
    color: $color-white;
    opacity: 0.5;
    transition: opacity 0.4s;
  }

</style>
