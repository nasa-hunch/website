<script lang="ts">
	import Program from '$lib/Program.svelte';
</script>

<Program program="Culinary">
	<div slot="subtitle">
		Fueling <span class="accent">explorers</span> helps fuel <span class="accent">innovation</span>.
	</div>
</Program>

<style lang="scss">
	@import '$lib/utils.scss';

	.accent {
		color: $primary;
	}
</style>
