<script lang="ts">
	import Program from '$lib/Program.svelte';
</script>

<Program program="Culinary">
	<div slot="subtitle">
		Fueling <span class="accent">explorers</span> helps fuel <span class="accent">innovation</span>.
	</div>
	<div slot="main">
		<p>
			The Astronaut Culinary Challenge develops food items for the Astronauts aboard the
			International Space Station from a general theme idea. Each year there is a new theme given
			out to the schools where the students create new dishes taking into account food processing
			procedure and nutritional requirements so that their items will meet the standards of the NASA
			Johnson Space Center Food Lab. With the growing culinary program we’re excited to bring in a
			wider range of students and show how research into space isn’t limited to only STEM fields, as
			well as educating students in researching and presenting their work in a professional
			environment.
		</p>
		<h2>2023-2024 Theme: <b>Savory Breakfast Item that includes a Vegetable</b>.</h2>
	</div>
</Program>

<style lang="scss">
	.accent {
		color: $primary;
	}
</style>
