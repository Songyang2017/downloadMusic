import Vue from 'vue'
import Router from 'vue-router'
import searchIndex from '@/components/searchIndex'
import vuexTest from '@/components/vuexTest'
import questions from '@/components/questions'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/song',
      name: 'searchIndex',
      component: searchIndex
    },
    {
      path: '/vuexTest',
      name: 'vuexTest',
      component: vuexTest
    },
    {
      path: '/questions',
      name: 'questions',
      component: questions
    }
  ]
})
