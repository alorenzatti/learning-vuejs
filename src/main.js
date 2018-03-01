import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes : routes,
  mode : 'history',
  scrollBehavior : function(to , from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }
    if(to.hash) {
      return {
        selector : to.hash
      }
    }
    return {x : 0, y : 0}
  }
})

router.beforeEach(function(to, from, next) {
  console.log("Global route check")
  next()
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
