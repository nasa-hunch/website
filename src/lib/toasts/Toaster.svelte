<script lang="ts">
	import { flip } from 'svelte/animate';
	import { cubicInOut } from 'svelte/easing';

	import Toast from './Toast.svelte';
	import { toasts } from './toaster';
</script>

<div class="wrap">
	{#if $toasts && $toasts.length > 0}
		{#each $toasts as toast (toast.id)}
			<div animate:flip={{ duration: 500, easing: cubicInOut }}>
				<Toast data={toast} />
			</div>
		{/each}
	{/if}
</div>

<style lang="scss">
	.wrap {
		position: fixed;
		bottom: 0px;
		left: 50%;
		translate: -50% 0%;
		display: flex;
		flex-direction: column-reverse;
		margin: 10px;
		z-index: 999;
		max-width: calc(100% - 10px * 2);
	}
</style>