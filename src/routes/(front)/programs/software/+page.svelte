<script lang="ts">
	import Highlight from 'svelte-highlight';
	import xml from 'svelte-highlight/languages/xml';
	import github from 'svelte-highlight/styles/github-dark';

	import Program from '$lib/Program.svelte';

	let code = `<span class="accent">Develop</span> in the <span class="accent">horizon</span> of space.`;
	export let data;
</script>

<svelte:head>
	<!-- svelte -->
	{@html github}
</svelte:head>

<Program program="Software" projectTemplates={data.projects}>
	<div slot="subtitle">
		<span class="accent">Develop</span> in the <span class="accent">horizon</span> of space.
	</div>
	<div slot="main">
		<div class="code">
			<Highlight {code} language={xml} />
		</div>

		<p>
			Students work directly with <span class="accent">NASA</span> to build
			<span class="accent">cutting-edge</span>
			software for the <span class="accent">International Space Station</span>.
		</p>
		<p>
			Software built by students helps sole real world problems using the agile software engineering
			cycle, with teams focusing on programming, design, quality assurance, and testing.
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
