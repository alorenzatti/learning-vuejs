import Vue from 'vue'
import App from './App.vue'

Vue.filter("wordLength", function(word) {
  var wordLength = word.length
  return word + " (" + wordLength + ")"
})

Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
