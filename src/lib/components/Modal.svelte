<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ close: void }>();

	let buttonElement: HTMLButtonElement;

	let clickHelper = (e: MouseEvent) => {
		if (e.target == buttonElement) {
			dispatch('close');
		}
	};

	let keyHelper = (e: KeyboardEvent) => {
		if (e.key == 'Escape') {
			dispatch('close');
		}
	};
</script>

<svelte:window on:keydown={keyHelper} />
<button transition:fade={{ easing: cubicInOut, duration: 150 }} bind:this={buttonElement} class="wrap" on:mousedown={clickHelper}>
	<div transition:fly={{ easing: cubicInOut, duration: 300, delay: 50, y: 50 }}>
		<slot />
	</div>
</button>

<style lang="scss">
	.wrap {
		all: unset;
		background: rgba(0, 0, 0, 0.5);
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0px;
		left: 0px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 30;
	}
</style>
