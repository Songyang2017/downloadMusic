<template>
  <div class="dialog-content">
    <div class="content-box">
      <div class="box-img"><img width="100%" :src="img" alt=""></div>
      <a :href="downUrl" :download="fileName" class="download">
        <i class="iconfont icon-download"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },
    downUrl: {
      type: String,
      default: ''
    },
    fileName: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~common/less/common';

  .dialog-content {
    .content-box {
      border-radius: 4px;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 80vw;
      height: 80vw;
      background-color: #fff;
      .translate(-50%, -50%, 0);
      z-index:20;
      ._flex();
      flex-direction: column;
      justify-content: space-around;
      .box-img{
        margin: 0 auto;
        width: 70%;
      }
      .download{
        display: block;
        text-align: center;
        i{
          font-size: 28px;
          color: #833b10;
        }
      }
    }
  }
</style>
