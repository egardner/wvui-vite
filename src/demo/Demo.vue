<template>
	<div id="demo">
		<button-demo></button-demo>
		<hr/>
		<typeahead-demo></typeahead-demo>
	</div>
</template>

<script>
import ButtonDemo from './ButtonDemo.vue';
import TypeaheadDemo from './TypeaheadDemo.vue';

export default {
	name: 'WvuiDemo',
	components: {
		ButtonDemo,
		TypeaheadDemo
	}
}
</script>

<style>

</style>