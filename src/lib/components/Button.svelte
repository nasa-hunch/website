<script lang="ts">
	export let value = 'Button!';
	export let type: HTMLButtonElement['type'] = 'submit';
	export let disabled = false;
	export let href: string | undefined = undefined;
</script>

{#if href}
	<a class="button" {href}>
		{value}
	</a>
{:else}
	<button class="button" {disabled} {type} on:click>
		{value}
	</button>
{/if}

<style lang="scss">
	.button {
		background: transparent;
		border: 1px solid gray;
		border-radius: 3px;
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		font-size: 1.2rem;
		cursor: pointer;
		transition: 0.2s all cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.button:disabled {
		opacity: 0.25;
		cursor: not-allowed;
	}
	.button:focus,
	.button:hover,
	.button:active {
		border: 1px solid $secondary;
	}
</style>
