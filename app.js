new Vue({
        el: '#exercise2',
        data: {
            value: ''
        },
        methods: {
        	alert : function() {
        		alert('You are being alerted!');
        	},
        	keyDownListener: function(event) {
        		this.value = event.target.value;
        	}
        }
    });