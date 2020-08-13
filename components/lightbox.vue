<template>
  <div class="lightbox" :class="{ 'is-active': lightBoxStatus }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    control: Boolean
  },
  computed: {
    lightBoxStatus: {
      get() {
        return this.$store.state.lightBox
      },
      set(value) {
        if (value === false) {
          this.$emit('closeLightboxHandler');
        }
      }
    }
  },
  watch: {
    control(value) {
      this.$store.commit('CTRL_LIGHTBOX', value);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

  .lightbox {
    min-width: 360px;
    max-width: 100%;
    min-height: 480px;
    max-height: 100%;
    padding: 1.5rem;
    background-color: $color-white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5000;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s;

    &.is-active {
      visibility: visible;
      opacity: 1;
      pointer-events: auto;
    }
  }

</style>