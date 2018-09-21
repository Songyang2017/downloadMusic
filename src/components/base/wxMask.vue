<template>
  <div v-show="flag" class="show-wrapper">
    <img src="../../assets/wxShow.png" alt="">
    <div><img src="../../assets/tip.png" alt=""></div>
  </div>
</template>

<script>
import {isWexin} from 'common/js/util'

export default {
  data () {
    return {
      flag: isWexin()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .show-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #fff;
    text-align: center;
    padding-top: 100px;
    div{
      img{
        padding-top: 15px;
        width: 65%;
      }
    }
    img{
      width: 48%
    }
  }
</style>
