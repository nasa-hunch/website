<script lang="ts">
	import Section from '$lib/page/Section.svelte';
</script>

<main>
	<Section title="Connect With Us">
		<p>We have various social media accounts, and you can also contact us via email.</p>
		<ul>
			<li><a href="/">Twitter</a></li>
			<li><a href="/">Facebook</a></li>
			<li><a href="/">YouTube</a></li>
		</ul>
	</Section>
</main>

<style lang="scss">
	@media screen and (min-width: 1400px) {
		main {
			max-width: 80%;
			margin: auto;
		}
	}
</style>
