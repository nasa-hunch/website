<script lang="ts">
	export let name: string;
	export let value = '#000000';

	let colorPicker: HTMLInputElement;
</script>

<input bind:this={colorPicker} {name} hidden type="color" bind:value />
<button type="button" style="background-color: {value ?? '#000000'};" on:click={() => colorPicker.click()} />

<style lang="scss">
	button {
		width: 2rem;
		height: 2rem;
		border: 2px solid black;
		border-radius: 50%;
		aspect-ratio: 1 / 1;
	}
</style>
