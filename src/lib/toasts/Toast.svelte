<script lang="ts">
	import { onMount } from 'svelte';
	import { quintInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	import { removeToast, type Toast } from './toaster';

	export let data: Toast;
	let showTimer = false;

	let close = () => removeToast(data.id);

	if (data.life && data.life > 0) {
		setTimeout(() => close(), data.life);
	}

	onMount(() => {
		showTimer = true;
	});
</script>

<div
	style="z-index: {100000 - data.id};"
	class="wrap"
	transition:fly={{ duration: 500, x: 500, opacity: 0.5, easing: quintInOut }}
>
	<div class="toast">
		<div
			class="color"
			class:error={data.type == 'error'}
			class:success={data.type == 'success'}
			class:warn={data.type == 'warn'}
		/>

		<p>{data.message}</p>
		<button class="close" on:click={close}>
			<svg style="fill: rgba(0, 0, 0, 1)" height="24" viewBox="0 0 24 24" width="24"
				><path
					d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
				/></svg
			>
		</button>
		{#if showTimer}
			<div style="animation-duration: {data.life}ms;" class="timer" />
		{/if}
	</div>
</div>

<style lang="scss">
	.wrap {
		position: relative;
		z-index: 11;
		margin-top: 10px;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;
		background: $background;
		border-radius: 5px;
		box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
	}

	.color {
		height: 13px;
		width: 13px;
		aspect-ratio: 1/1;
		border-radius: 50%;
		margin-right: 10px;
		flex-grow: 1;
	}

	.error {
		background: rgb(196, 20, 20);
	}

	.success {
		background: rgb(47, 255, 57);
	}

	.warn {
		background: rgb(235, 235, 0);
	}

	.toast {
		padding: 5px 0px 5px 10px;
		box-sizing: border-box;
		overflow: hidden;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		max-width: 400px;
		min-width: 200px;
	}

	h3 {
		margin: 5px 0px;
	}

	p {
		margin: 0px;
		width: 100%;
		word-break: normal;
	}

	.close {
		all: unset;
		cursor: pointer;
		font-size: 1.2rem;
		height: 100%;
		display: flex;
		align-items: end;
		justify-content: end;
		padding-left: 10px;
	}

	.close img {
		width: 30px;
	}

	@keyframes closeBar {
		from {
			width: 100%;
		}
		to {
			width: 0%;
		}
	}

	.timer {
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 0%;
		height: 3px;
		background: $background2;
		animation-timing-function: linear;
		animation-name: closeBar;
	}
</style>
