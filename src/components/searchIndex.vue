<template>
  <div class="box-wrapper">
    <p>Test</p>
    <input type="text" v-model="query">
  </div>
</template>

<script>
import {search} from 'api/search'

export default {
  data () {
    return {
      query: '',
      page: 1,
      showSinger: {
        type: Boolean,
        default: true
      }
    }
  },
  methods: {
    _search (query, page, zhida, perpage) {
      search(query, page, zhida, perpage)
    }
  },
  watch: {
    query (v) {
      this._search(v, this.page, this.showSinger, 20).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~common/less/common';
  @import '~common/less/variable';

  .box-wrapper {
    p {
      color: @color-green
    }
  }
</style>
