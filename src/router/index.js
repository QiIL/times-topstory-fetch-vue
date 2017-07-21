import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Qill from '@/components/Qill'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/qill',
      name: 'qill',
      component: Qill
    }
  ]
})
