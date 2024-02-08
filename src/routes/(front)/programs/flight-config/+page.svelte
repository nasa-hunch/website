<script lang="ts">
	import Program from '$lib/Program.svelte';
</script>

<Program program="Flight Configuration">
	<div slot="subtitle">
		<p>
			The bridge between <span class="accent">design</span> and <span class="accent">flight</span>
		</p>
	</div>
</Program>

<main>
	<p>
		<b>Flight Configuration</b> allows students to bring their projects to life. They will work with
		NASA HUNCH Mentors to bring their selected project designs and drawings up to NASA drafting and manufacturing
		standards. This includes producing completed flight drawings, documentation, and final 3D prints
		if needed.
	</p>
	<p>Students participating in flight configuration may do one of the following:</p>
	<ul>
		<li>Continue to work on their project from the previous school year</li>
		<li>Work on a new project that was chosen to move on to flight</li>
		<li>Work on projects from organizations within NASA which must be created in a short period</li>
	</ul>
	<p>
		When their designs are ready for production in one of our HUNCH schools, the project will go
		through <b>all</b> the industry safety and design requirements as any other product that is launched
		to the international space station.
	</p>
</main>

<style lang="scss">
	@import '$lib/utils.scss';

	main {
		padding: 1rem;
	}

	.accent {
		color: $primary;
	}

	ul {
		margin: 1rem;
	}
</style>
