<template>
  <div class="loading-wrapper">
    <div class="gif-block"></div>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '正在加载'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~common/less/common';
  @import '~common/less/mixin';

  .loading-wrapper {
    position: absolute;
    top: 40%;
    left: 50%;
    .translate(-50%, -50%, 0);
    width: 50%;
    .padding-dpr(18px, 0, 18px, 0);
    background-color: rgba(0, 0, 0, .6);
    z-index: 200;
    .gif-block {
      .loading-bg();
      width: 30px;
      height: 30px;
      margin: auto;
      background-size: 100% 100%;
    }
    p {
      .font-dpr(15px);
      text-align: center;
      .padding-dpr(5px, 0, 0, 0);
      color: rgba(255, 255, 255, .8);
    }
  }
</style>
