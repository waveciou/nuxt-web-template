<template>
  <nav id="menu">
    <div class="wrap">
      <ul class="menu__list">
        <li v-for="item in menuList" :key="item.name">
          <nuxt-link :to="item.path" :title="item.name" class="menu__list-link">
            <span>{{ item.name }}</span>
          </nuxt-link>
        </li>
      </ul>
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
      this.menuList = this.$store.state.route.menu;
    },
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

  #menu {
    display: none;
    border-bottom: 1px $color-gray solid;
    background-color: $color-white;

    @include min-width(map-get($desktop, sm)) {
      display: block;
    }
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
