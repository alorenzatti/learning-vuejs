<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }} </p>
        <button @click="resetName">Reset name</button>
    </div>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				required: true,
				default: "FOO"
			}
		},
			
		methods : {
			switchName : function() {

				return this.name.split("").reverse().join("")
			},
			resetName: function() {
				this.name = 'Alex'
				this.$emit('nameWasReset', this.name)
			}
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
