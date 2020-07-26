<template>
  <div class="navbar">
    <div class="wrap">
      <div class="navbar__content">
        <div class="side-left">
          <nav class="breadcrumb">
            <ul class="breadcrumb__list">
              <li v-for="item in breadcrumbs" :key="item.name">
                <nuxt-link :to="item.path" :class="{'icon-home': item.path === '/'}" :title="item.name" class="breadcrumb__link">
                  <span>{{ item.name }}</span>
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="side-right">
          <div class="feature"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  computed: {
    breadcrumbs() {
      const path = this.$route.path;
      const pathArray = path.split('/');
      const crumbs = pathArray.map(item => {
        const crumb = {};
        crumb.name = item === '' ? 'Home' : item;
        crumb.path = item === '' ? '/' : path.slice(0, path.indexOf(item) + item.length);
        return crumb
      });
      return crumbs
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

  .navbar {
    padding: 10px 0px;

    @include min-width(map-get($desktop, sm)) {
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }

  .navbar__content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .breadcrumb__list {
    display: flex;
    align-items: center;

    > li {
      display: flex;
      align-items: center;
      margin-right: 10px;

      &::after {
        content: '\f054';
        @include fontawesome;
        margin-left: 10px;
      }

      &:last-child::after {
        display: none;
      } 
    }
  }

  .breadcrumb__link {
    display: block;
    font-size: map-get($font-size, base);
    line-height: 1.6em;

    @include min-width(map-get($desktop, sm)) {
      font-size: map-get($font-size, xs);
    }

    &.icon-home {
      > span {
        display: none;
      }

      &::before {
        content: '\f015';
        @include fontawesome;
      }
    }
  }

</style>
