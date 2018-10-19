import Vue from 'vue'
import Router from 'vue-router'

import home from '../container/Vhome'
import category from '../container/Vcategory'
import buy from '../container/Vbuy'
import cart from '../container/Vcart'
import my from '../container/Vmy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },{
      path: '/buy',
      name: 'buy',
      component: buy
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },{
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
