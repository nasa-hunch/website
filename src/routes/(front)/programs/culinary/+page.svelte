<script lang="ts">
	import Program from '$lib/Program.svelte';
</script>

<Program program="Culinary">
	<div slot="subtitle">
		Fueling <span class="accent">explorers</span> helps fuel <span class="accent">innovation</span>.
	</div>
	<div slot="main">
		<p>
			Every year, NASA HUNCH Culinary students create food to be eaten by astronauts on the International Space Station.
			Students are challenged to create a recipe that meets the nutritional requirements of the astronauts and is shelf-stable for at least 6 months.
		</p>
		<div class="project">
			<h3>2023-2024 Theme</h3>
			<h2>
				<span class="accent">Savory Breakfast Item that includes a Vegetable</span>.
			</h2>

			<h4>Requirements</h4>

			<h5>Nutritional Guidelines:</h5>
			<ul>
				<li>Calories: 150 - 350</li>
				<li>Fat: 12 grams or less</li>
				<li>Saturated Fat: 4 grams or less</li>
				<li>Sodium: 250mg or less</li>
				<li>Dietary Fiber: 1 gram or more</li>
			</ul>

			<p>
				Must <b>not</b> contain raw fish, shellfish, or undercooked meats.
			</p>
			<p>
				Sauces and dressings must <b>not</b> contain raw eggs or egg whites.
			</p>
			<p>
				<b>NO</b> alcohol, including cooking wine, brandy, etc.
			</p>

			<h5>Processing Requirements</h5>

			<p>
				Products to avoid:
			</p>
			<ul>
				<li>Bread</li>
			</ul>

			<p>
				Products which work well:
			</p>

			<ul>
				<li>Savory Oats</li>
				<li>Crustless Quiche</li>
				<li>Garden Frittata</li>
				<li>Sweet Potato</li>
				<li>Bacon Hash</li>
			</ul>
		</div>
	</div>
</Program>

<style lang="scss">
	.accent {
		color: $primary;
	}

	.project {
		padding: 1rem;
		border-radius: 1rem;
		background-color: lightgray;

		h2, h3 {
			text-align: center;
		}
	}
</style>
