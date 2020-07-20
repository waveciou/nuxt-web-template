<template>
  <nav id="menu">
    <div class="wrap">
      <ul class="menu__list">
        <li><nuxt-link to="/" class="menu__list-link"><span>News</span></nuxt-link></li>
        <li><nuxt-link to="/" class="menu__list-link"><span>About</span></nuxt-link></li>
        <li><nuxt-link to="/" class="menu__list-link"><span>Work</span></nuxt-link></li>
        <li><nuxt-link to="/" class="menu__list-link"><span>Product</span></nuxt-link></li>
        <li><nuxt-link to="/" class="menu__list-link"><span>Media</span></nuxt-link></li>
        <li><nuxt-link to="/" class="menu__list-link"><span>Shop</span></nuxt-link></li>
        <li><nuxt-link to="/" class="menu__list-link"><span>Form</span></nuxt-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

  #menu {
    border-bottom: 1px $color-gray solid;
  }

  .menu__list {
    display: flex;
    align-items: center;
    justify-content: center;

    > li {
      display: flex;
      justify-content: center;
      flex-grow: 1;
    }
  }

  .menu__list-link {
    display: block;
    padding: 13px 10px;
    line-height: 1.6em;
    text-align: center;
  }

</style>
