<template>
	<div @click="deleteQuote">
		<p>{{ quote.text }}</p>
	</div>
</template>

<script>
	import {quoteBus} from '../main.js'
	export default {
		props : ['quote'],

		methods : {
			deleteQuote : function() {
				quoteBus.$emit('deleteQuote', this.quote.index)
			}
		}
	}
</script>

<style scoped>
	div {
		padding: 5px;
		margin: 5px;
		border: 1px solid black;
		border-radius: 2px;
		font-size: 28px;
		font-family: Arizonia;
		color: #AAA;
	}
</style>