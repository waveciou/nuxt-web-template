<template>
  <div class="no_script__block">
    <div v-html="removeNoScript"></div>
    <noscript inline-template>
      <div class="noscript-description">
        <p>您的瀏覽器不支援JavaScript功能，若部份網頁功能無法正常使用時，請開啟瀏覽器JavaScript狀態</p>
        <p>友善列印：<br>請利用鍵盤按住Ctrl + P開啟列印功能</p>
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

<style>

</style>