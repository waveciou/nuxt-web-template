<template>
  <nav class="m-menu" :class="{'is-active': $store.state.menuOpen === true}">
    <div class="m-menu__header">
      <button class="m-menu__close-btn" @click.stop="closeMobileMenu" title="Close Mobile Menu">
        <span>Close Mobile Menu</span>
      </button>
    </div>
    <div class="m-menu__body">
      <div class="m-menu__content">
        <ul class="m-menu__list">
          <li v-for="item in menuList" :key="item.name">
            <nuxt-link :to="item.path" :title="item.title" class="m-menu__list-link">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        menuList: []
      }
    },
    fetch() {
      this.menuList = [...this.$store.state.route.menu, ...this.$store.state.route.header];
    },
    methods: {
      closeMobileMenu() {
        this.$store.commit('CTRL_MENU_OPEN', false);
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

  .m-menu {
    width: 80%;
    min-width: 140px;
    max-width: 400px;
    height: 100%;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: 4500;
    transform: translateX(100%);
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
    background-color: $color-black;
    overflow: hidden;

    &.is-active {
      transform: translateX(0);
    }
  }

  .m-menu__header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
  }

  .m-menu__body {
    width: 100%;
    padding-bottom: 2rem;
    flex-grow: 1;
    position: relative;
    overflow: hidden;
  }

  .m-menu__content {
    width: 100%;
    height: calc(100% - 2rem);
    position: absolute;
    top: 0px;
    left: 0px;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    -o-overflow-scrolling: touch;
  }

  .m-menu__close-btn {
    width: 40px;
    height: 40px;
    display: block;
    position: relative;

    span {
      @include hidetext;

      &::before {
        content: '\f00d';
        @include fontawesome;
        font-size: map-get($font-size, md);
        line-height: 40px;
        color: $color-white;
      }
    }
  }

  .m-menu__list {
    > li {
      border-bottom: 1px rgba($color-white, 0.6) solid;
    }
  }

  .m-menu__list-link {
    display: block;
    padding: 10px 20px;
    line-height: 1.8em;
    color: $color-white;
  }

</style>