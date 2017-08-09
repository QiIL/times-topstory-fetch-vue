import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hello2 from '@/components/Hello2'
import Index from '../views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hello2',
      name: 'hello2',
      component: Hello2
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})
