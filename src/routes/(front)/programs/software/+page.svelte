<script lang="ts">
	import Program from '$lib/Program.svelte';
	import Highlight from "svelte-highlight";
	import xml from "svelte-highlight/languages/xml";
	import github from "svelte-highlight/styles/github-dark";

	let code = `<span class="accent">Develop</span> in the <span class="accent">horizon</span> of space.`
</script>

<svelte:head>
  {@html github}
</svelte:head>

<Program program="Software">
	<div slot="subtitle">
		<span class="accent">Develop</span> in the <span class="accent">horizon</span> of space.
	</div>
	<div slot="main">
		<div class="code">
			<Highlight language={xml} {code} />
		</div>

		<p>
			Students work directly with <span class="accent">NASA</span> to build <span class="accent">cutting-edge</span>
			software for the <span class="accent">International Space Station</span>.
		</p>
		<p>
			Software built by students helps sole real world problems using the agile software engineering cycle, with teams
			focusing on programming, design, quality assurance, and testing.
		</p>
	</div>
</Program>

<style lang="scss">
	.accent {
		color: $primary;
	}

	.code :global(*) {
		border-radius: 1rem;
		font-family: monospace;
		text-align: center;
	}
</style>
