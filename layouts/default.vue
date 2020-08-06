<template>
  <div class="wrapper">
    <noscript-component />
    <header-component :scrollValue="scrollValue" />
    <menu-component />
    <transition name="fade">
      <nuxt />
    </transition>
    <footer-component />
    <transition name="fade" mode="out-in" v-if="scrollValue > 0">
      <div class="float-block">
        <a href="javascript:;" class="float-block__top-btn" v-scroll-to="{element: 'body'}" title="TOP">TOP</a>
      </div>
    </transition>
    <div class="m-menu__overlay" :class="{'is-active': $store.state.menuOpen === true}" @click.stop="closeMobileMenu">
    </div>
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
      scrollValue: 0,
      htmlSelector: null
    }
  },
  components: {
    'noscript-component': noscript,
    'header-component': header,
    'menu-component': menu,
    'footer-component': footer,
    'mobile-menu-component': mobileMenu
  },
  mounted() {
    this.htmlSelector = document.querySelector('html');

    this.getScreenWidth();

    window.addEventListener('scroll', this.getScrollValue);
    window.addEventListener('resize', this.getScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.getScrollValue);
    window.removeEventListener('resize', this.getScreenWidth);
  },
  methods: {
    closeMobileMenu() {
      this.$store.commit('CTRL_MENU_OPEN', false);
    },
    getScreenWidth() {
      this.$store.commit('GET_SCREEN_WIDTH');
    },
    getScrollValue() {
      this.scrollValue = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }
  },
  computed: {
    menuOpenStatus() {
      return this.$store.state.menuOpen;
    },
  },
  watch: {
    menuOpenStatus(value) {
      if (value === true) {
        this.htmlSelector.classList.add('is-hidden');
      } else {
        this.htmlSelector.classList.remove('is-hidden');
      }
    },
    $route(name) {
      this.$store.commit('CTRL_MENU_OPEN', false);
      this.$store.dispatch('changePagesTitle', name);
    }
  },
}
</script>

<style lang="scss">
  @import "~/assets/scss/utils/_utils.scss";

  .wrapper {
    position: relative;
    padding-top: 60px;
    background-color: $color-white;

    @include min-width(map-get($desktop, sm)) {
      padding-top: 70px;
    }
  }

  .float-block {
    position: fixed;
    right: 20px;
    bottom: 60px;
    z-index: 3000;

    @include min-width(map-get($tablet, sm)) {
      right: 40px;
      bottom: 80px;
    }
  }

  .float-block__top-btn {
    width: 50px;
    height: 50px;
    display: block;
    border-radius: 100%;
    text-align: center;
    line-height: 50px;
    background-color: $color-blue;
    color: $color-white;
    opacity: 0.5;
    transition: opacity 0.4s;

    @include min-width(map-get($tablet, sm)) {
      width: 60px;
      height: 60px;
      line-height: 60px;
    }

    @include min-width(map-get($desktop, sm)) {
      &:hover {
        opacity: 1;
      }
    }
  }

  .m-menu__overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 4000;
    background-color: rgba($color-black, 0.7);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;

    &.is-active {
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
    }
  }

</style>
