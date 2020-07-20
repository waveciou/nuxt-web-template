<template>
  <footer class="footer">
    <div class="wrap">
      <div class="footer__content">
        <div class="side-left">
          <ul class="footer__menu">
            <li v-for="item in menuLink" :key="item.name">
              <a :href="item.href" class="footer__menu-link" :title="item.name">{{ item.name }}</a>
            </li>
          </ul>
        </div>
        <div class="side-right">
          <ul class="footer__media">
            <li v-for="item in mediaLink" :key="item.name">
              <a :href="item.href" class="footer__media-link" :title="item.name">{{ item.name }}</a>
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
        menuLink: [
          {
            name: 'contact',
            href: '#'
          }
        ],
        mediaLink: [
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
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

  .footer {
    padding: 13px 0px;
    color: $color-white;
    background-color: $color-black;
  }

  .footer__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0px;
  }

  .footer__menu {
    display: flex;
    align-items: center;

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

    > li {
      padding: 0px 10px;
    }
  }

  .footer__media-link {
    display: block;
    line-height: 1.6em;
    color: $color-white;
  }

  .footer__copyright {
    line-height: 1.6em;
    text-align: center;
    color: $color-white;
  }

</style>
