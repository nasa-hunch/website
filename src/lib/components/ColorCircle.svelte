<script lang="ts">
	export let value = '#000000';
	export let style = '';
</script>

<div style="background-color: {value ?? '#000000'}; {style}" />

<style lang="scss">
	div {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		aspect-ratio: 1 / 1;
	}
</style>
