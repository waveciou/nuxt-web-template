<template>
  <div class="noscript">
    <div v-html="removeNoScript"></div>
    <noscript inline-template>
      <div class="noscript__description">
        <p>您的瀏覽器不支援 JavaScript 功能，若部份網頁功能無法正常使用時，請開啟瀏覽器 JavaScript 狀態</p>
      </div>
    </noscript>
  </div>
</template>

<script>
export default {
  data() {
    return {
      removeNoScript: `<script>;(function(){document.querySelector('body').classList.remove('no-js');})();<\/script>`
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/utils/_utils.scss";

</style>