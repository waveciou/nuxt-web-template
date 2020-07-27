<template>
  <header class="header" :class="{'is-fixed': scrollValue > 0}">
    <div class="wrap">
      <div class="header__content">
        <div class="side-left">
          <h1 v-if="$route.name === 'index'" class="logo">
            <nuxt-link to="/" :title="$store.state.title">{{ $store.state.title }}</nuxt-link>
          </h1>
          <div v-else class="logo">
            <nuxt-link to="/" :title="$store.state.title">{{ $store.state.title }}</nuxt-link>
          </div>
        </div>
        <div class="side-right">
          <div class="header__nav">
            <ul class="header__navlink">
              <li v-for="item in menuList" :key="item.name">
                <nuxt-link :to="item.path" class="header__navlink-link" :class="getIconClassName(item.name)" :title="item.name">{{ item.name }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button class="m-menu__open-btn" @click.stop="openMobileMenu" title="Open Mobile Menu">
        <span>Open Mobile Menu</span>
      </button>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        menuList: []
      }
    },
    props: {
      scrollValue: Number
    },
    fetch() {
      this.menuList = this.$store.state.route.header;
    },
    methods: {
      getIconClassName(payload) {
        return `has-icon icon-${payload.toLowerCase()}`
      },
      openMobileMenu() {
        this.$store.commit('CTRL_MENU_OPEN', true);
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

  $m-menu__size: 60px;

  .header {
    width: 100%;
    height: 60px;
    border-bottom: 1px $color-gray solid;
    background-color: $color-white;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 3000;

    @include min-width(map-get($desktop, sm)) {
      height: 70px;
      padding: 15px 0px;
    }

    &.is-fixed {
      position: fixed;
    }
  }

  .header__content {
    width: calc(100% - #{$m-menu__size});
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include min-width(map-get($desktop, sm)) {
      width: auto;
    }
  }

  .header__nav {
    display: none;

    @include min-width(map-get($desktop, sm)) {
      display: flex;
      align-items: center;
    }
  }

  .header__navlink {
    display: flex;
    align-items: center;

    > li {
      padding: 0px 13px;
      border-right: 1px $color-gray solid;

      &:last-child {
        border-right: none;
      }
    }
  }

  .header__navlink-link {
    display: block;
    line-height: 1.6em;

    &.has-icon::before {
      @include fontawesome;
      margin-right: 5px;
    }

    &.icon-sitemap::before {
      content: '\f0e8';
    }

    &.icon-favorite::before {
      content: '\f004';
    }

    &.icon-opinion::before {
      content: '\f0e0';
    }
  }

  .logo {
    width: 120px;
    height: 40px;
    position: relative;
    overflow: hidden;

    > a {
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      object-fit: contain;
      background-color: $color-black;
      
      @include hidetext;
    }
  }

  .wrap {
    display: flex;
    align-items: center;

    @include min-width(map-get($desktop, sm)) {
      display: block;
    }

    @include max-width(map-get($tablet, lg)) {
      max-width: 100%;
    }
  }

  .m-menu__open-btn {
    width: $m-menu__size;
    height: $m-menu__size;
    display: block;
    padding-top: ($m-menu__size - 7px) / 2;
    padding-bottom: ($m-menu__size - 7px) / 2;
    position: relative;
    @include hidetext;

    span {
      position: relative;

      &, &::before, &::after {
        width: 35px;
        height: 4px;
        display: block;
        margin: auto;
        background-color: $color-black;
      }

      &::before, &::after {
        content: '';
        position: absolute;
      }

      &::before {
        margin-top: -10px;
      }

      &::after {
        margin-top: 10px;
        top: 0px;
      }
    }

    @include min-width(map-get($desktop, sm)) {
      display: none;
    }
  }

</style>
