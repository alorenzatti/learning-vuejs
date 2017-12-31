var vm1 = new Vue({
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Test'
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1')

vm1.title = "Changed!"


var vm2 = new Vue({
  el: '#app2',
  data: {
    title : 'The title'
  },
  methods : {

    change : function() {

      vm1.title = 'Changed by clicking!'
    }
  }
});

var vm3 = new Vue({
  template: '<h1> Hello! </h1>'
});

vm3.$mount('#app3')