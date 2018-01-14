import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind : function(el, binding, vnode) {
    el.style.backgroundColor = 'green'
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
