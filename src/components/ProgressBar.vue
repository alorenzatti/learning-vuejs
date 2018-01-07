<template>
	<div class="progressBarContainer" @click="progressStatus++">
		<div class="progressBar" :style="progressBarStyle" >
			<label>{{ progressStatus }} / {{ max }}</label>
		</div>
	</div>
</template>

<script>
	export default {

		props : ['progressStatus','max'],
		
		computed : {

			progressBarStyle : function() {

				this.progressStatus = this.progressStatus > this.max ? this.max : this.progressStatus
				return 'width: ' + (this.progressStatus/this.max)*100 + '%;'
			}
		}
	}
</script>

<style scoped>
	.progressBar {
		background-color: #347ab9;
		height: 100%;
		color: white;
		text-align: center;
	}

	.progressBarContainer {
		border: 1px solid black;
		height: 25px;
		width: 100%;
		border-radius: 5px;
		background-color: #DDD;
	}
</style>