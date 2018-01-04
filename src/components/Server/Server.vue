<template>
	<li
		class="list-group-item"
		@click="serverSelected"
		style="cursor: pointer">

		<p>Server {{ server.id }} status is {{ server.status }}</p>
	</li>
</template>

<script>
	import {serverBus} from '../../main'

	export default {
		
		props : ['server'],

		methods : {

			serverSelected : function() {
				
				serverBus.$emit('serverSelected', this.server)
			}
		}
	}
</script>