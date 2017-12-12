new Vue({
  el: '#exercise4',
  data: {
    effectClassState: false
  },
  computed : {
    effectClass: function() {
        return  this.effectClassState ? 'highlight' : 'shrink';
    }
  },
  methods: {
    startEffect: function() {
        var self = this;
        setInterval(function() {
            self.effectClassState = !self.effectClassState;
        },2000);
    },
    startProgress: function() {

    }
  }
});
