import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import yule from '@/components/yule/yule'
import guoji from '@/components/guoji/guoji'
import shishang from '@/components/shishang/shishang'
import detai from '@/components/details/detai'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/yule',
      name: 'yule',
      component: yule
    },
    {
      path: '/guoji',
      name: 'guoji',
      component: guoji
    },
    {
      path: '/shishang',
      name: 'shishang',
      component: shishang
    },
    {
      path: '/detai',
      name: 'detai',
      component: detai
    }
  ]
})
