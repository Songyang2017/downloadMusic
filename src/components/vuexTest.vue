<template>
  <div>
    <div class="titleText">Vuex</div>
    <ul class='content-text'>
      <li>
        <p class="title-d">计数应用</p>
        <p>
          <button @click="increment">+</button>
          <counter></counter>
          <button @click="decrement">-</button>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

console.log(store)
console.log(Vuex)

const Counter = {
  template: `<span class="value-d">{{ count }}</span>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
export default {
  store,
  computed: {
    count () {
      return store.state.count
    }
  },
  components: {
    Counter
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>
<style scoped lang="less">
@import '~common/less/common';

@green: #3eaf7c;
@gray: #a5a5a5;
div, p{
  font-size: 15px;
}
.titleText{
  width: 100%;
  text-align: center;
  color: #fff;
  background-color: @green;
  padding: 8px 0;
  margin-bottom: 15px;
}
.content-text{
  li{
    padding: 0 10px;
    p{
      &.title-d{
        color: @gray;
        font-size: 16px;
        padding-bottom: 5px;
        margin-bottom: 5px;
        .border-b();
      }
      .value-d{
        margin: 0 5px;
      }
      button{
        padding: 0 5px;
      }
    }
  }
}
</style>
