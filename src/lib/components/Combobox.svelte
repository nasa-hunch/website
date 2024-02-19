

<script lang="ts" generics="K">
	import type { Mouse } from '@playwright/test';

	import { Options } from 'svelte-preprocess/dist/types';

	import { createEventDispatcher, onMount } from 'svelte';

	type Option = {
		value: string | number;
		display: string;
	};
	/**
	 * Option is a option in the dropdown, includes a value and a display string
	 */

	type ComboOptions<T> = [T[], (input: T) => number, (input: T) => string];
	export let options: ComboOptions<K>;

	
	let getItemString = options[2];
	let getItemId = options[1];

	export let name = 'Input';
	export let label = 'Input';
	export let bgColor = '#ffffff';
	export let required = false;
	export let autocomplete: HTMLInputElement['autocomplete'] | null = null;

	export let value: string = '';

	$: moveText = value.length > 0 || active;

	onMount(() => (value = value));
	let active = false;

	export let selected = options[1](options[0][0]);

	let outerButton: HTMLButtonElement;
	const buttonClick = (e: MouseEvent) => {
		if (e.currentTarget == outerButton) {
			active = true;
		}
	};

	
	
</script>

<div style="--bgColor: {bgColor}" class="wrap" class:active>
	<button
		bind:this={outerButton}
		class="wrap"
		
		tabindex="-1"
		type="button"
		on:click={buttonClick}
	>
		<input {name} hidden bind:value={selected} />
		<input {autocomplete} {required} bind:value />
		<div class="labelBase" class:label1={!moveText} class:labelMoved={moveText}>
			{label}
		</div>
	</button>
	{#if active}
		<div class="options">
			{#each options[0] as option, i}
				{#if getItemString(option).toLowerCase().includes(value.toLowerCase())}
					<button
						class="option"
						type="button"
						on:click={() => {
							selected = getItemId(option);
							value = getItemString(option);
							active = false;
						}}
					>
						{getItemString(option)}
					</button>
				{/if}
			{/each}
		</div>
	{/if}
</div>

{#if active}
	<button
		class="deselect"
		type="button"

		on:mousedown={() => {
			active = false;
		}}
	/>
{/if}

<style lang="scss">
	.wrap {
		all: unset;
		position: relative;
		width: 100%;
		font-family: 'Lexend Variable', sans-serif;
		border-radius: 3px;
		outline: 1px solid gray;
		cursor: text;
		z-index: 2;
		background: var(--bgColor);
	}
	input {
		border: 0px;
		outline: 0px;
		box-sizing: border-box;
		padding: 10px;
		font-size: 1.2rem;
		width: 100%;
		font-family: 'Lexend Variable', sans-serif;
		background: transparent;
		z-index: -1;
	}

	.labelBase {
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
	}

	.label1 {
		font-size: 1.12rem;
		font-weight: 400;
		box-sizing: border-box;
		padding: 10px;
		top: 0px;
		left: 0px;
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: start;
		background: transparent;
		color: #333;
	}
	.labelMoved {
		font-size: 0.8rem;
		position: absolute;
		top: -10px;
		left: 10px;
		background: var(--bgColor);
		padding: 0px 5px;
		color: black;
	}
	.active > button {
		outline: 1px solid $secondary;
		border-radius: 3px 3px 0px 0px;
		
	}

	.active {
		z-index: 1000;
	}
	.options {
		position: absolute;
		left: 0px;
		width: 100%;
		display: flex;
		flex-direction: column;
		max-height: 300px;
		outline: 1px solid $secondary;
		padding: 5px;
		box-sizing: border-box;
		background: var(--bgColor);
		overflow-y: auto;
		z-index: 1000;

	
		&::-webkit-scrollbar {
			width: 12px;
		}
		&::-webkit-scrollbar-track-piece,
		&::-webkit-scrollbar-track {
			background: $background;
			background-clip: content-box;  
		}
		&::-webkit-scrollbar-thumb {
			background: $background2;
			background-clip: content-box; 
    		border: 3px solid transparent;
			border-radius: 7px;
			
		}

		
	}
	
	.option {
		all: unset;
		height: 100%;
		padding: 5px 10px;
		box-sizing: border-box;
		background: $background;
		cursor: pointer;
		border-radius: 5px;
	}
	.option:hover {
		background: $background2;
	}
	.deselect {
		all: unset;
		left: 0px;
		z-index: 0;
		top: 0px;
		position: fixed;
		width: 100%;
		height: 100%;
		background: transparent;
	}
</style>
