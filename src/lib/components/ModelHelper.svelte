<script lang="ts">
	export let visibile = false;
	let buttonElement: HTMLButtonElement;

	let clickHelper = (e: MouseEvent) => {
		if (e.target == buttonElement) {
			visibile = false;
		}
	};

	let keyHelper = (e: KeyboardEvent) => {
		if (e.key == 'Escape') {
			visibile = false;
		}
	};
</script>

<svelte:window on:keydown={keyHelper} />
{#if visibile}
	<button class="wrap" bind:this={buttonElement} on:click={clickHelper}>
		<slot />
	</button>
{/if}

<style>
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
	}
</style>
