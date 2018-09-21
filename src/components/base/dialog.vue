<template>
  <transition name="fade">
    <div class="dialog-content">
      <div class="content-box">
        <slot></slot>
        <div class="close" @click="closeTim"><i class="iconfont icon-guanbi"></i></div>
      </div>
    </div>
  </transition>
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
  },
  methods: {
    closeTim () {
      this.$emit('closeTim')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~common/less/common';

  .dialog-content {
    .content-box {
      box-shadow: 0 0px 24px 2px rgba(0, 0, 0, 0.5);
      border-radius: 4px;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 70vw;
      background-color: #fff;
      .translate(-50%, -50%, 0);
      z-index:20;
    }
    .close{
      position: absolute;
      top: 5px;
      right:5px;
      font-size: 0;
      z-index: 101;
      i{
        color: #fff;
        font-size: 16px;
      }
    }
  }
</style>
