<script lang="ts">
	export let method: HTMLFormElement['method'] | undefined;
	export let action: HTMLFormElement['action'] | undefined;
</script>

<form {action} {method}>
	<slot />
</form>

<style lang="scss">
	form {
		width: 100%;
		max-width: 500px;
		padding: 25px;
		border-radius: 5px;
		box-sizing: border-box;
		background: #f1f1f1;
	}
</style>
