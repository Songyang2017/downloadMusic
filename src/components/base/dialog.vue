<template>
    <transition name="zoo">
      <div class="content-box-d">
          <div class="wrapper">
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
  @import 'animate.css';
  @import '~common/less/common';

    .content-box-d{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      .flex();
      justify-content: center;
      .wrapper {
        border-radius: 4px;
        position: relative;
        width: 70vw;
        box-shadow: 0 0px 24px 2px rgba(0, 0, 0, 0.4);
        z-index: 200;
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
    }
    .zoo-enter-active{
      animation: fadein .4s;
      .wrapper{
        animation: zooms .4s;
      }
    }

    @keyframes fadein {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes zooms {
      0%{
        .scale(0, 0)
      }
      50% {
        .scale(1.1, 1.1)
      }
      100%{
        .scale(1, 1)
      }
    }
</style>
