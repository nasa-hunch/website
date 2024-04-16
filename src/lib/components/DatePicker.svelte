<script lang="ts">
	import dayjs from "dayjs";

	export let name = 'Input';
	export let label = 'Input';
	export let bgColor = '#f8f8f8';
	export let value: Date | undefined = undefined;
	let active = false;

	$: console.log(value)
	$: derivedValue = dayjs(value).format("YYYY-MM-DD")
</script>

<button style="--bgColor: {bgColor}" class="wrap" class:active tabindex="-1" type="button">
	<input {name} class="placeholder" type="date" value={derivedValue} on:change />

	<div class="labelBase labelMoved">
		{label}
	</div>
</button>

<style lang="scss">
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

	.placeholder {
		width: 100%;
		border: 0px;
		outline: 0px;
		box-sizing: border-box;
		padding: 10px;
		font-size: 1.2rem;
		width: 100%;
		font-weight: 400;

		font-family: 'Lexend Variable', sans-serif;
		background: transparent;
	}

	.labelBase {
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
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
		border: 1px solid $secondary;
	}
</style>
