<script lang="ts">
	import { onMount } from 'svelte';

	type Option = {
		value: string | number,
		display: string,
	}
	/**
	 * Option is a option in the dropdown, includes a value and a display string
	 */
	export let options: Option[] = []

	

	export let name = 'Input';
	export let label = 'Input';
	export let bgColor = '#ffffff';
	export let required = false;
	export let autocomplete: HTMLInputElement['autocomplete'] | null = null;

	let input: HTMLInputElement;
	export let value: string = '';

	let startFocus = () => active = true;

	let selectInput = () => (active = true);
	let deselectText = () => (active = false);

	$: moveText = value.length > 0 || active;

	onMount(() => (value = value));
	let active = false;

	let selected = options[0].value;
	$: console.log(selected)
	
	let outerButton: HTMLButtonElement
	const buttonClick = (e: MouseEvent) => {
		if(e.currentTarget == outerButton) {
			active = true
			console.log('active set by button')
		}
	}
</script>

<div class="wrap" style="--bgColor: {bgColor}">
	<button
		type="button"
		
		class="wrap"
		class:active
		bind:this={outerButton}
		on:click={buttonClick}
		
		tabindex="-1"
	>
		<input hidden {name} bind:value={selected}/>
		<input
			bind:this={input}		
			bind:value
			{required}
			{autocomplete}
		/>
		<div class="labelBase" class:label1={!moveText} class:labelMoved={moveText}>
			{label}
		</div>
	
	
	</button>
	{#if active}
	<div class="options">
		{#each options as option}
			{#if option.display.toLowerCase().includes(value.toLowerCase())}
				<button class="option" on:click={(e) => {selected = option.value; value = option.display; active = false}} type="button">
					{option.display}
				</button>		
			{/if}	
		{/each}
	</div>
{/if}
</div>


{#if active}
		<button class="deselect" type="button" on:mousedown={() => {active = false}}>

		</button>
	{/if}


<style>
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
	.active {
		outline: 1px solid #02bfe7;
		border-radius: 3px 3px 0px 0px;
	}
	.options {
		position: absolute;
		left: 0px;
		width: 100%;
		display: flex;
		flex-direction: column;
		max-height: 300px;
		outline: 1px solid #02bfe7;
		background: var(--bgColor);
		overflow-y: auto;
		
	}
	.option {
		all: unset;
		height: 100%;
		padding: 5px 10px;
		box-sizing: border-box;
		background: var(--bgColor);
		cursor: pointer;
	}
	.option:hover {
		opacity: 0.5;
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
