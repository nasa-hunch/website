<script lang="ts">
	import { tooltip } from '@svelte-plugins/tooltips';
	import type { SubmitFunction } from '@sveltejs/kit';

	import { enhance } from '$app/forms';

	/**
	 * Href and formData are not compatible, use one or the other.
	 */
	export let href: string | undefined = undefined;

	export let disabled = false;
	export let style = '';

	/**
	 * Href and formData are not compatible, use one or the other.
	 */
	export let formData:
		| {
				method: HTMLFormElement['method'];
				action: HTMLFormElement['action'];
		  }
		| undefined = undefined;

	export let enhanceBody: SubmitFunction | undefined = undefined;

	let tooltipText: string | undefined = undefined;

	export { tooltipText as tooltip };
</script>

<div use:tooltip={{ content: tooltipText, action: 'hover', arrow: false, animation: 'fade' }}>
	{#if disabled}
		<div {style} class="iconButton disabled">
			<slot />
		</div>
	{:else if href}
		<a {style} class="iconButton" {href} on:click>
			<slot />
		</a>
	{:else if formData}
		<form
			class="formButton"
			action={formData.action}
			method={formData.method}
			use:enhance={enhanceBody}
		>
			<button {style} class="iconButton" on:click>
				<slot />
			</button>
		</form>
	{:else}
		<button {style} class="iconButton" on:click>
			<slot />
		</button>
	{/if}
</div>

<style lang="scss">
	.iconButton {
		all: unset;
		cursor: pointer;
		padding: 5px;
		height: 100%;
		box-sizing: border-box;
		margin: 0px;
		aspect-ratio: 1/1;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;

		&:hover {
			background: $background2;
		}
	}

	.formButton {
		all: unset;
		cursor: pointer;
		aspect-ratio: 1/1;
		height: 100%;
	}

	:global(.iconButton svg) {
		height: 100%;
		width: 100%;
	}
	.disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
