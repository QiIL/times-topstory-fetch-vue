import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
<<<<<<< HEAD
import Hello2 from '@/components/Hello2'
import Index from '../views/index'

=======
import Qill from '@/components/Qill'
>>>>>>> f2e0191d8a3a7f39105f53d3126b70835b0f8add
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
<<<<<<< HEAD
      path: '/hello2',
      name: 'hello2',
      component: Hello2
    },
    {
      path: '/index',
      name: 'index',
      component: Index
=======
      path: '/qill',
      name: 'qill',
      component: Qill
>>>>>>> f2e0191d8a3a7f39105f53d3126b70835b0f8add
    }
  ]
})
