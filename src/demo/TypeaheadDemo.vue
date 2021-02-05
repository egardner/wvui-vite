<template>
<div>
	<h2>TypeaheadSearch.vue</h2>
	<wvui-typeahead-search
		:buttonLabel="'search'"
		:id="'demo-search'"
		:suggestionsLabel="'suggestions'"
		:formAction="'#'"
		:footerSearchText="'footer text'"
	></wvui-typeahead-search>
</div>
</template>

<script>
import { WvuiTypeaheadSearch } from '../entries/wvui';

export default {
	name: 'TypeaheadDemo',
	components: {
		WvuiTypeaheadSearch
	}
}
</script>

<style>

</style>