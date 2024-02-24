<script lang="ts">
	import { enhance } from '$app/forms';

	export let value: string;
	export let action: string;
	export let name: string = 'InTextInput';
	export let disableFormMode = false;

	let buttonElement: HTMLButtonElement;

	const submitForm = () => {
		if (disableFormMode) {
			return;
		}
		buttonElement.click();
	};
</script>

<form
	class="wrap"
	{action}
	method="post"
	on:submit
	use:enhance={() => {
		return ({ update }) => {
			update({ reset: false });
		};
	}}
>
	<input {name} class="inTextInput" on:change on:input on:change={submitForm} bind:value />
	<div hidden>
		<slot />
	</div>
	<button bind:this={buttonElement} hidden type="submit" />
</form>

<style lang="scss">
	.wrap {
		width: 100%;
		flex-grow: 1;
	}
	.inTextInput {
		all: unset;
		width: 100%;
		padding: 0px 5px;
		border-radius: 3px;
		box-sizing: border-box;
	}
	.inTextInput:focus,
	.inTextInput:active {
		outline: 1px solid $primary;
	}
</style>
