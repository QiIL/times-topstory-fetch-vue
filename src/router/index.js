import Vue from 'vue'
import Router from 'vue-router'
import NewsList from '@/components/NewsList'
import Index from '@/views/index'
import Title from '@/components/Title'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/newslist',
      name: 'newslist',
      component: NewsList
    },
    {
      path: '/title',
      name: 'Title',
      component: Title
    }
  ]
})
