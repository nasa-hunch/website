<script lang="ts">
	export let value = 'Button!';
	export let type: HTMLButtonElement['type'] = 'submit';
	export let disabled = false;
</script>

<button {disabled} {type} on:click>
	{value}
</button>

<style lang="scss">
	button {
		display: inline-block;
		background: transparent;
		border: 1px solid gray;
		border-radius: 3px;
		padding: 3px 6px;
		box-sizing: border-box;
		font-size: inherit;
		cursor: pointer;
	}
	button:disabled {
		opacity: 0.25;
	}
	button:focus,
	button:hover,
	button:active {
		border: 1px solid $secondary;
	}
</style>
