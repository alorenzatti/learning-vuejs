<template>
	<div>
		<slot name="headerMessage"></slot>
		<appProgressBar
        	:progressStatus="progressStatus"
        	:max="max"
    	>
    	</appProgressBar>
	</div>
</template>

<script>
	import ProgressBar from './ProgressBar.vue'

	export default {
		
		props : ['progressStatus', 'max'],

		components : {

          appProgressBar : ProgressBar
        }
	}
</script>

<style>
</style>