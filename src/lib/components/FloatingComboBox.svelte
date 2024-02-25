<script generics="K" lang="ts">
	export let showSelector = false;

	let holder: HTMLDivElement;
	let searchBox: HTMLInputElement;
	let searchInput = '';

	type Data<T> = [data: T[], index: (item: T) => number, mapper: (item: T) => string];

	export let data: Data<K>;
	let filteredData: K[];
	$: filteredData = data[0].filter((item) => {
		return data[2](item).toLowerCase().includes(searchInput.toLowerCase());
	});

	function close() {
		holder.hidden = true;
		showSelector = false;
		searchBox.value = '';
	}

	export function propagateClick(e: MouseEvent) {
		holder.hidden = false;
		holder.style.left = `${e.clientX - 250}px`;
		holder.style.top = `${e.clientY}px`;
		if (searchBox) {
			searchBox.focus();
		}
	}
</script>

{#if showSelector}
	<button class="outside" on:click|self={close} />
{/if}
<div bind:this={holder} class="selector" hidden={!showSelector}>
	<input bind:this={searchBox} placeholder="Search" bind:value={searchInput} />
	<slot {filteredData} />
</div>

<style lang="scss">
	.selector {
		position: fixed;
		border-radius: 5px;
		box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.15);
		background: $background;
		width: 250px;
		max-height: 400px;
		padding: 10px;
		box-sizing: border-box;
		z-index: 50;
	}
	.selector input {
		position: relative;
		all: unset;
		background: rgba(0, 0, 0, 0.1);
		text-align: left;
		cursor: text;
		padding: 7px 10px;
		margin-bottom: 5px;
		box-sizing: border-box;
		width: 100%;
		border-radius: 3px;
		transition: all cubic-bezier(0.55, 0.055, 0.675, 0.19) 0.05s;
	}

	.outside {
		all: unset;
		position: fixed;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		z-index: 49;
	}
</style>
