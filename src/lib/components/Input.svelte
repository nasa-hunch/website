<script lang="ts">
	import { onMount } from 'svelte';

	// yes this uses javascript and is not good for js disabled browsers
	// no I am not going to fix it because we need js for the backend anyways.
	// it will still work but it will look bad

	export let name = 'Input';
	export let label = 'Input';
	export let bgColor = '#ffffff';
	export let type: 'password' | 'email' | undefined = undefined;
	export let required = false;
	export let autocomplete: HTMLInputElement['autocomplete'] | null = null;

	let input: HTMLInputElement;
	export let value: string = '';

	let startFocus = () => input.focus();

	let selectInput = () => (active = true);
	let deselectText = () => (active = false);

	$: moveText = value.length > 0 || active;

	onMount(() => (value = value));
	let active = false;
</script>

<button
	type="button"
	style="--bgColor: {bgColor}"
	class="wrap"
	class:active
	on:click={startFocus}
	tabindex="-1"
>
	<input
		bind:this={input}
		{name}
		on:focus={selectInput}
		on:blur={deselectText}
		bind:value
		{required}
		{autocomplete}
		{...{ type /* asserting string input since we know the type is always a password */ }}
	/>
	<div class="labelBase" class:label1={!moveText} class:labelMoved={moveText}>
		{label}
	</div>
</button>

<style>
	.wrap {
		all: unset;
		position: relative;
		width: 100%;
		font-family: 'Lexend Variable', sans-serif;
		border-radius: 3px;
		border: 1px solid gray;
		cursor: text;
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
		border: 1px solid #02bfe7;
	}
</style>
