<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { clickOutside } from '$lib/actions/clickOutside';

	export let param: string;
	type Filter = {
		name: string;
		value: string;
		active?: boolean;
	};

	export let filters: Filter[];

	let filterDiv: HTMLDivElement;

	export const propagateClick = (e: MouseEvent) => {
		filterDiv.hidden = false;
		updateActive();
		(filterDiv.style.left = `${e.clientX}px`), (filterDiv.style.top = `${e.clientY}px`);
	};

	const close = () => {
		filterDiv.hidden = true;
	};

	const updateActive = () => {
		filters.forEach((item, index) => {
			if ($page.url.searchParams.get(param) == null && item.value == 'none') {
				filters[index].active = true;
			} else {
				if ($page.url.searchParams.get(param) == item.value) {
					filters[index].active = true;
				} else {
					filters[index].active = false;
				}
			}
		});
	};

	const setFilter = (filter: Filter) => {
		if (filter.value == 'none') {
			$page.url.searchParams.delete(param);
		} else {
			$page.url.searchParams.set(param, filter.value);
		}

		goto($page.url, { invalidateAll: true });
		updateActive();
	};
</script>

<div bind:this={filterDiv} class="filterDiv" hidden use:clickOutside={close}>
	<h3>Filters</h3>
	<div class="buttons">
		{#each filters as filter}
			<button
				class="filterButton"
				class:active={filter.active}
				on:click={() => {
					setFilter(filter);
				}}>{filter.name}</button
			>
		{/each}
	</div>
</div>

<style lang="scss">
	.filterDiv {
		position: fixed;
		padding: 1rem;
		box-sizing: border-box;
		background: $background;
		border-radius: 5px;
		box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.05);
		width: 15rem;
		z-index: 10;

		h3 {
			text-align: center;
			font-weight: 500;
			font-size: 1.5rem;
			margin: 0px;
			border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		}
	}
	.buttons {
		display: flex;
		flex-direction: column;
		margin-top: 0.25rem;

		.active {
			background: rgba(0, 0, 0, 0.05);
		}

		button {
			all: unset;
			cursor: pointer;
			box-sizing: border-box;
			width: 100%;
			margin: 0.1rem 0px;
			padding: 0.25rem 0.5rem;
			box-sizing: border-box;
			border-radius: 0.25rem;
			transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;

			&:hover {
				background: rgba(0, 0, 0, 0.1);
			}
		}
	}
</style>
