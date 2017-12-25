new Vue({
  el: '#exercise4',
  data: {
    effectClassState: false,
    colorClasses: ['color-red','color-green','color-blue'] ,
    currentColor: -1,
    sizeClasses : ['size-50','size-100','size-150'],
    currentSize: -1,
    userClass: ''
  },
  computed : {
    effectClass: function() {
        return  this.effectClassState ? 'highlight' : 'shrink';
    },

    colorClass : function() {

      return this.colorClasses[this.currentColor];
    },


    sizeClass : function() {

      return this.sizeClasses[this.currentSize];
    }
  },
  methods: {
    startEffect: function() {
        var self = this;
        setInterval(function() {
            self.effectClassState = !self.effectClassState;
        },2000);

        setInterval(this.setColor, 1500);
        setInterval(this.setSize, 2500);
    },

    setColor : function() {

      this.currentColor = this.currentColor < this.colorClasses.length - 1 ? this.currentColor + 1 : 0;
    },

    setSize : function() {
      
      this.currentSize = this.currentSize < this.sizeClasses.length - 1 ? this.currentSize + 1 : 0;
    },

    startProgress: function() {

    }
  }
});
