<template>
  <div class="wrapper">
    <noscript-component />
    <header-component />
    <menu-component />
    <transition name="fade" >
      <nuxt />
    </transition>
    <footer-component />
  </div>
</template>

<script>
import noscript from '~/components/model/noscript.vue';
import header from '~/components/model/header.vue';
import menu from '~/components/model/menu.vue';
import footer from '~/components/model/footer.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    'noscript-component': noscript,
    'header-component': header,
    'menu-component': menu,
    'footer-component': footer
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

  body {
    line-height: 1.6em;
    letter-spacing: 1px;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    background-color: $color-white;
    position: relative;
    font-family: $font-family;
    font-size: 1rem;
  }

</style>
