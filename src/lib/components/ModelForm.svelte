<script lang="ts">
	import { enhance } from '$app/forms';

	export let method: HTMLFormElement['method'] | undefined;
	export let action: HTMLFormElement['action'] | undefined;
</script>

<form {action} {method} on:submit on:reset use:enhance>
	<slot />
</form>

<style lang="scss">
	form {
		width: 100%;
		max-width: 500px;
		padding: 25px;
		border-radius: 5px;
		box-sizing: border-box;
		background: $background;
	}
</style>
