<template>
	<div class="col-xs-12 col-sm-6">
		<p v-if="!server">Please select a server.</p>
		<span v-else>
        	<p>Server {{ server.id }} current status is: {{ server.status }}</p>
         	<button @click="refreshStatus">Refresh status</button>
		</span>
    </div>
</template>

<script>
	import {serverBus} from '../../main'

	export default {

		data : function() {

			return {
				server : null,
				statuses : ['Normal', 'Critical', 'Unknown', 'Off-line']
			}
		},

		created : function() {
			serverBus.$on('serverSelected', (server) => {
				this.server = server
			})
		},

		methods : {

			refreshStatus : function() {
				this.server.status = this.statuses[Math.floor(Math.random() * this.statuses.length)]
			}
		}
	}
</script>