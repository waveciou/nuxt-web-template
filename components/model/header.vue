<template>
  <header class="header">
    <div class="wrap">
      <div class="header__content">
        <div class="side-left">
          <h1 class="logo">
            <nuxt-link to="/"></nuxt-link>
          </h1>
        </div>
        <div class="side-right">
          <div class="header__nav">
            <ul class="header__navlink">
              <li v-for="item in navLink" :key="item.name">
                <a :href="item.href" class="header__navlink-link" :class="getIconClassName(item.name)">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        navLink: [
          {
            name: 'Sitemap',
            href: '#'
          },
          {
            name: 'Favorite',
            href: '#'
          },
          {
            name: 'Opinion',
            href: '#'
          }
        ]
      }
    },
    methods: {
      getIconClassName(payload) {
        return `has-icon icon-${payload.toLowerCase()}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

  .header {
    padding: 13px 0px;
    border-bottom: 1px $color-gray solid;
  }

  .header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__nav {
    display: flex;
    align-items: center;
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
</style>
