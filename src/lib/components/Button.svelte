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
		background: transparent;
		border: 1px solid gray;
		border-radius: 3px;
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		font-size: 1.2rem;
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
