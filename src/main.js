// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/style.css'
import './common/css/reset.css'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import axios from 'axios'
import Qs from 'qs'
import {Carousel, CarouselItem} from 'element-ui'
Vue.use(Carousel)
Vue.use(CarouselItem)

//QS是axios库中带的，不需要我们再npm安装一个
 
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
Vue.prototype.HOST = '/api'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
