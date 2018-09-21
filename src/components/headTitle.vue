<template>
  <div class="header">
    <div class="text">
      <i class="iconfont icon-yinle"></i>
      <p>{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~common/less/common';

  .text{
    padding: 15px 0;
    .flex();
    justify-content: center;
    i{
      font-size: 20px;
      color: #f45d5d;
    }
    p{
      margin-left: 3px;
      font-size: 16px;
      font-weight: 400;
    }
  }
</style>
