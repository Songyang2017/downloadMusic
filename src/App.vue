<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scope lang="less">
  @import '~common/less/base';

  @font-face {
    font-family: 'iconfont';  /* project id 798815 */
    src: url('//at.alicdn.com/t/font_798815_q8p0ijjrr6b.eot');
    src: url('//at.alicdn.com/t/font_798815_q8p0ijjrr6b.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_798815_q8p0ijjrr6b.woff') format('woff'),
    url('//at.alicdn.com/t/font_798815_q8p0ijjrr6b.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_798815_q8p0ijjrr6b.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
  body{
    background-color: #F8FAFE;
  }
</style>
