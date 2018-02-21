import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

Vue.http.options.root = "https://alorenza-learning-vuejs.firebaseio.com/data.json"

Vue.http.interceptors.push(function(request, next) {
  console.log(request)
  if(request.method == "POST") {
    request.method = "PUT"
  }
  next(function(response) {
    response.json = function() {
      return {messages : response.body}
    }
  })
})

new Vue({
  el: '#app',
  render: h => h(App)
})
