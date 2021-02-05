<template>
	<div>
		<h2>WvuiButton.vue</h2>
		<wvui-button @click="clicked++">
			Default Button
		</wvui-button>

		<wvui-button :action="'progressive'" @click="clicked++">
			Progressive button
		</wvui-button>

		<wvui-button :action="'destructive'" @click="clicked--">
			Destructive button
		</wvui-button>

		<wvui-button :quiet="true" @click="clicked++">
			Quiet button
		</wvui-button>

		<br /><br />
		<pre>Clicked {{clicked}} times.</pre>
	</div>
</template>

<script>
import { WvuiButton } from '../entries/wvui';

export default {
	components: {
		WvuiButton
	},

	data () {
		return {
			clicked: 0
		}
	}
}
</script>

<style>

</style>