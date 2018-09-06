<template>
  <div class="box-wrapper">
    <div class="content-box">
      <div class="search-box">
        <i class="iconfont">&#xe63b;</i>
        <input type="text" v-model="query">
      </div>
    </div>
    <ul class="content-list">
      <li>
        <img src="" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import {search} from 'api/search'
import {debounce, musicDate} from 'common/js/util'
import {getVkey} from 'api/vkey'

export default {
  data () {
    return {
      query: '',
      page: 1,
      result: '',
      showSinger: {
        type: Boolean,
        default: true
      }
    }
  },
  created () {
    this.$watch('query', debounce((v) => {
      search(v, this.page, this.showSinger, 20).then((res) => {
//        console.log(res)
        var proList = this._normalize(res.data.song.list)
        console.log(proList)
        setTimeout(() => {
          this.result = musicDate(proList)
//          console.log(this.result)
        }, 200)
      })
    }, 200))
  },
  methods: {
    _normalize (list) {
      list.forEach((v) => {
        getVkey(v.songmid).then((res) => {
          v.vkey = res.data.items[0].vkey
          v.filename = res.data.items[0].filename
        })
      })
      return list
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~common/less/common';
  @import '~common/less/variable';

  .content-box {
    padding: 0;
    .search-box {
      .flex();
      font-size: 0;
      margin: 50px 10px 0;
      padding: 5px;
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid @color-border;
      i {
        font-size: 18px;
        color: @color-gray;
      }
      input {
        flex: 1;
        border: 0;
        padding: 5px;
        font-size: @font-size-medium;
      }
    }
  }
</style>
