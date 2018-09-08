<template>
  <div class="box-wrapper">
    <div class="wrapper-content">
      <div class="content-box">
        <div class="search-box">
          <i class="iconfont icon-search"></i>
          <input type="text" v-model="query">
        </div>
      </div>
      <ul class="content-list" v-if="result.length">
        <li v-for="item in result" :key="item.songmid">
          <div class="imgs-wrapper">
            <img v-lazy="item.img" alt="">
            <div class="mask-wrap"></div>
            <i @click="play(item)" :class="[item.playStatus?playIcon:pauseIcon]" class="iconfont"></i>
          </div>
          <div class="desc">
            <p v-html="item.songName"></p>
            <p><span v-html="item.singerName"></span>&emsp;<span v-html="item.albumname"></span></p>
          </div>
          <div class="diwnload-icon" @click="getUrl(item, true)">
            <i class="iconfont icon-download"></i>
          </div>
        </li>
      </ul>
    </div>
    <transition name="fade">
      <div class="mask" v-show="popShow" @click="popShow = !popShow">
        <dia-log :img="img" :down-url="downUrl" :file-name="fileName"></dia-log>
      </div>
    </transition>
    <wx-mask></wx-mask>
    <audio ref="audio" :src="vkeyUrl"></audio>
  </div>
</template>

<script>
import {search} from 'api/search'
import {debounce, musicDate} from 'common/js/util'
import {getVkey} from 'api/vkey'
import diaLog from '@/components/dialog'
import wxMask from '@/components/wxMask'

export default {
  data () {
    return {
      query: '',
      page: 1,
      result: '',
      vkeyUrl: '',
      downUrl: '',
      showSinger: true,
      popShow: false,
      pauseIcon: 'icon-bofang',
      playIcon: 'icon-zanting',
      img: '',
      fileName: ''
    }
  },
  created () {
    this.$watch('query', debounce((v) => {
      search(v, this.page, this.showSinger, 20).then((res) => {
        this.result = musicDate(res.data.song.list)
        console.log(this.result)
      })
    }, 500))
  },
  components: {
    diaLog,
    wxMask
  },
  methods: {
    play (its) {
      this.result.forEach((v) => {
        if (v.songmid !== its.songmid) {
          v.playStatus = false
        }
      })

      its.playStatus = !its.playStatus
      console.log(its)
      if (its.playStatus) {
        this.getUrl(its)
        this.$refs.audio.oncanplay = () => {
          this.$refs.audio.play()
        }
      } else {
        this.$refs.audio.pause()
      }
    },
    getUrl (its, down) {
      getVkey(its.songmid).then((res) => {
        var vkey = res.data.items[0].vkey
        var filename = res.data.items[0].filename
        if (vkey) {
          var url = `http://dl.stream.qqmusic.qq.com/${filename}?vkey=${vkey}&guid=7748797702&uin=1546302993&fromtag=66`
          if (down) {
            this.downUrl = url
            this.img = its.img
            this.fileName = its.fileName
            this.popShow = true
          } else {
            if (this.vkeyUrl !== url) {
              this.vkeyUrl = url
            }
          }
        } else {
          alert('暂无该歌曲版权！')
          its.playStatus = false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~common/less/common';
  @import '~common/less/variable';

  .box-wrapper{
    height: 100%;
    .wrapper-content{
      height: 100%;
      overflow: auto;
    }
  }
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
  .content-list{
    padding: 15px 15px 0;
    li{
      margin-bottom: 10px;
      .flex();
      .imgs-wrapper{
        width: 60px;
        height: 60px;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        .mask-wrap{
          position: absolute;
          left: 0;
          top: 0;
          background-color: rgba(0,0,0,.2);
          height: 100%;
          width: 100%;
          z-index: 5;
        }
        i{
          position: absolute;
          left: 50%;
          top: 50%;
          font-size: 25px;
          color: #fff;
          .translate(-50%, -50%, 0);
          z-index: 10;
        }
      }
      .desc{
        height: 60px;
        padding-left: 10px;
        overflow: hidden;
        ._flex();
        flex: 1;
        flex-direction: column;
        justify-content: space-around;
        p{
          &:nth-child(1){
            font-size: @font-size-large;
            .no-wrap();
          }
          &:nth-child(2){
            font-size: @font-size-small;
            .no-wrap();
          }
        }
      }
      .diwnload-icon{
        padding: 0 5px;
        cursor: pointer;
        i{
          font-size: 28px;
          color: @color-brown;
        }
      }
    }
  }
</style>
