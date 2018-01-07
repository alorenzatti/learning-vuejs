<template>
	<div class="container">
		<div>
			<h4>Quote</h4>
			<textarea class="quoteText" v-model="quoteText"></textarea>
		</div>
		<div class="buttonContainer">
			<button class="addQuoteButton" @click="newQuote" :disabled="currentQuotes >= maxQuotes">Add Quote</button>
		</div>
	</div>
</template>

<script>
	import {quoteBus} from '../main.js'

	export default {

		created : function() {
			quoteBus.$on('maxQuotesReached', () => {
				this.quoteButtonEnabled = false
			})
		},

		props : ['currentQuotes', 'maxQuotes'],

		data : function() {
			return {
				quoteText : "",
				quoteButtonEnabled : true
			}
		},

		methods : {

			newQuote : function() {

				if(this.quoteText.trim()) {

					quoteBus.$emit("newQuote", this.quoteText)
					this.quoteText = ""
				}
			}
		}
	}
</script>

<style scoped>
	.quoteText {
		width: 100%;
		border-radius: 2px;
		height: 100px;
	}

	.addQuoteButton {
		background-color: #347ab9;
		color: white;
		border-radius: 2px;
		border: 0px;
		padding: 10px;
	}

	.addQuoteButton:disabled {
		background-color: #CCC;
	}

	.container {
		width: 75%;
		justify-content: center;
		align-items: center;
	}

	.buttonContainer {
		text-align: center;
	}
</style>