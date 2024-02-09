<script lang="ts">
	import Program from '$lib/Program.svelte';
</script>

<Program program="Video & Media">
	<div slot="subtitle">
		<span class="accent">Inspire</span> the next generation of explorers.
	</div>
	<div slot="main">
		<p>
			With the backing of <abbr title="Association for Career and Technical Education">ACTE</abbr>,
			students can work on video projects that are used to inspire and educate new explorers about
			the work being done at NASA.
		</p>
		<p>
			The best videos are used in NASA's outreach efforts and are shown to students across the
			country in NASA and ACTE events.
		</p>
		<div class="themeInfo">
			<h2>
				2023-2024 Theme: <i>Why Go To The Moon?</i>
			</h2>
			<p>
				Showcase <b>Space Exploration Preparations</b> and <b>CTE Courses and Careers</b>
				that help go to the moon.
			</p>
			<p>
				Awards given to the best <b>2-minute</b> videos from:
			</p>
			<ul>
				<li>K-8</li>
				<li>9-12 Grade</li>
				<li>Post-Secondary Participants</li>
			</ul>
			<p>
				Note: <b>ALL videos</b> will be placed on the NASA HUNCH YouTube channel.
			</p>
			<p>
				<b>DEADLINE: Monday, April 1st, 2024</b>
			</p>
		</div>
	</div>
</Program>

<style lang="scss">
	.accent {
		color: $primary;
	}

	.themeInfo {
		background-color: $lightBackground;
		padding: 1em;
		margin-top: 1em;
		border-radius: 1em;

		h2 {
			text-align: center;
		}
	}
</style>
