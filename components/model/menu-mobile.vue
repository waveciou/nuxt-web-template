<template>
  <nav class="m-menu" :class="{ 'is-active': $store.state.menuOpen === true }">
    <div class="m-menu__header"></div>
    <div class="m-menu__body">
      <div class="m-menu__content"></div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {

      }
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
    background-color: $color-white;
    overflow: hidden;

    &.is-active {
      transform: translateX(0);
    }
  }

  .m-menu__header {
    width: 100%;
    height: 60px;
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

</style>