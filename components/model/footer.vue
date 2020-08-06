<template>
  <footer class="footer">
    <div class="wrap">
      <div class="footer__content">
        <div class="side-left">
          <ul class="footer__menu">
            <li v-for="item in menuList" :key="item.name">
              <nuxt-link :to="item.path" class="footer__menu-link" :title="item.title">{{ item.title }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="side-right">
          <ul class="footer__media">
            <li v-for="item in mediaList" :key="item.name">
              <a :href="item.href" class="footer__media-link" :class="getIconClassName(item.name)" :title="item.name">
                <span>{{ item.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__copyright">© copyright</div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        menuList: [],
        mediaList: [
          {
            name: 'Facebook',
            href: '#'
          },
          {
            name: 'Instagram',
            href: '#'
          },
          {
            name: 'Youtube',
            href: '#'
          },
          {
            name: 'Twitter',
            href: '#'
          }
        ]
      }
    },
    fetch() {
      this.menuList = this.$store.state.route.footer;
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

  .footer {
    padding: 15px 0px;
    color: $color-white;
    background-color: $color-black;
  }

  .footer__content {
    padding: 30px 0px;

    @include min-width(map-get($desktop, md)) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .footer__menu {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 15px;

    @include min-width(map-get($desktop, md)) {
      margin-bottom: 0px;
    }

    > li {
      padding: 0px 10px;
    }
  }

  .footer__menu-link {
    display: block;
    line-height: 1.6em;
    color: $color-white;
  }

  .footer__media {
    display: flex;
    align-items: center;
    justify-content: center;

    @include min-width(map-get($desktop, md)) {
      justify-content: flex-start;
    }

    > li {
      padding: 0px 7px;
    }
  }

  .footer__media-link {
    display: block;
    position: relative;
    border-radius: 100%;
    font-size: map-get($font-size, sm);
    overflow: hidden;

    > span {
      display: none;
    }

    &.has-icon {
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        transition: transform 0.3s;
        transform: scale(0);
      }

      &::after {
        width: 35px;
        height: 35px;
        display: block;
        position: relative;
        @include fontawesome('brands');
        color: $color-white;
        line-height: 35px;
        text-align: center;
      }

      @include min-width(map-get($desktop, sm)) {
        &:hover::before {
          transform: scale(1);
        }
      }
    }
    

    &.icon-facebook {
      &::before {
        background-color: #2196F3;
      }

      &::after {
        content: '\f39e';
      }
    }

    &.icon-instagram {
      &::before {
        background: linear-gradient(145deg, #3051F1 10%, #C92BB7 70%);
      }

      &::after {
        content: '\f16d';
      }
    }

    &.icon-youtube {
      &::before {
        background-color: #f44336;
      }

      &::after {
        content: '\f167';
      }
    }

    &.icon-twitter {
      &::before {
        background-color: #32CCFE;
      }

      &::after {
        content: '\f099';
      }
    }
  }

  .footer__copyright {
    line-height: 1.6em;
    text-align: center;
    color: $color-white;
  }

</style>
