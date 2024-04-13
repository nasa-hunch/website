<script>
	import Program from '$lib/Program.svelte';

	export let data;
</script>

<Program
	description={data.description}
	program={data.name}
	projectTemplates={data.projectTemplates}
>
	{data.description}
</Program>
