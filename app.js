new Vue({
        el: '#exercise3',
        data: {
            value: 0
        },
        computed: {
        	result: function() {
        		return this.value < 37 ? "Not yet there" : "Done";
        	}
        }
    });