import Vue from 'vue'
import Router from 'vue-router'
import searchIndex from '@/components/searchIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'searchIndex',
      component: searchIndex
    }
  ]
})
