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
          <ul class="feature">
            <li>
              <button class="feature__btn has-icon icon-print" title="Print">
                <span>Print</span>
              </button>
            </li>
            <li class="share-block">
              <button class="feature__btn has-icon icon-share" title="Share">
                <span>Share</span>
              </button>
            </li>
          </ul>
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
      const pathArray = path.split('/').filter((item, index) => {
        return item !== '' || (item === '' && index === 0);
      });

      const route = this.$store.getters.flatRouteData;

      const crumbs = pathArray.map(item => {
        const crumb = {};

        if (item === '') {
          crumb.name = 'Home';
          crumb.path = '/';
        } else {
          let routeData = route.filter(data => {
            return data.name === item;
          });

          crumb.name = routeData.length < 1 ? item : routeData[0].title;
          crumb.path = routeData.length < 1 ? item : routeData[0].path;
        }
        return crumb;
      });

      return crumbs;
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

  .feature {
    display: none;

    @include min-width(map-get($desktop, sm)) {
      display: flex;
      align-items: center;
    }

    > li {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  .feature__btn {
    width: 40px;
    height: 40px;
    display: block;
    border-radius: 100%;
    color: $color-white;
    background-color: $color-black;
    text-align: center;

    > span {
      display: none;
    }

    &.has-icon::before {
      color: $color-white;
      @include fontawesome;
      font-size: 125%;
    }

    &.icon-print::before {
      content: '\f1c4';
    }

    &.icon-share::before {
      content: '\f064';
    }
  }

</style>
