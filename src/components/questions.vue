<template>
    <div class="form-body">
        <form action="">
          <input id="name" type="text" placeholder="姓名">
          <input id="tel" type="tel" placeholder="电话">
          <input id="others" type="text" placeholder="其他问题">
          <input type="submit">
        </form>
    </div>
</template>
<script>
import {copy} from 'common/js/util'
export default {
  mounted () {
    copy()
  }
}
</script>
<style scoped lang="less">
@import '~common/less/common';

.form-body{
  max-width: 512px;
  margin: auto;
  padding: 10px;
  form{
    input{
      width: 100%;
      margin-bottom: 15px;
      display: block;
      padding:8px;
      border: 1px solid #979797;
      font-size: 16px;
    }
    input[type='submit']{
      width: 100%;
      text-align: center;
      background-color: #4A4C5B;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
      border: none;
    }
  }
}
</style>
