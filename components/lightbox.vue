<template>
  <div class="lightbox__overlay">
    <div class="lightbox">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

  .lightbox__overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 4000;
    background-color: rgba($color-black, 0.7);
    transition: opacity 0.3s;
  }

  .lightbox {
    min-width: 360px;
    max-width: 100%;
    min-height: 480px;
    max-height: 100%;
    padding: 1.5rem;
    background-color: $color-white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>