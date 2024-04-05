<script lang="ts">
	import User from '$lib/components/User.svelte';

	export let data;
</script>
<main>
	<User user={data.selectedUser} />
</main>
<style lang="scss">
	main {
		margin: 1rem;
	}
</style>
