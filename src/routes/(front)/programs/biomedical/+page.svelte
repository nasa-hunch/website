<script lang="ts">
	import Program from '$lib/Program.svelte';
</script>

<Program program="Health & Biomedical Science">
	<div slot="subtitle">
		Limit <span class="accent">risks</span>; Keep astronauts <span class="accent">safe</span>.
	</div>
	<div slot="main">
		<p>
			The sky is <b>not</b> the limit when thinking of <span class="accent">solutions</span> to keep
			astronauts safe & healthy in the <span class="accent">hazardous</span> environment of space.
		</p>
	</div>
</Program>

<style lang="scss">
	.accent {
		color: $primary;
	}
</style>
