<script lang="ts">
	export let visible = false;
	let buttonElement: HTMLButtonElement;

	let clickHelper = (e: MouseEvent) => {
		if (e.target == buttonElement) {
			visible = false;
		}
	};

	let keyHelper = (e: KeyboardEvent) => {
		if (e.key == 'Escape') {
			visible = false;
		}
	};
</script>

<svelte:window on:keydown={keyHelper} />
{#if visible}
	<button bind:this={buttonElement} class="wrap" on:mousedown={clickHelper}>
		<slot />
	</button>
{/if}

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
	}
</style>
