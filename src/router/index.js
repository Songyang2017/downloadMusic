import Vue from 'vue'
import Router from 'vue-router'
import searchIndex from '@/components/searchIndex'
import vuexTest from '@/components/vuexTest'
import questions from '@/components/questions'
import index from '@/components/index'
import blog from '@/components/Blog/blogIndex'
import admin from '@/components/Blog/admin'

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
    },
    {
      path: '/MyBlog',
      name: 'blog',
      component: blog
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})
