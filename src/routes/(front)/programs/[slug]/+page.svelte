<script>
    import Program from '$lib/Program.svelte';

    export let data;
</script>

<Program
    program={data.name}
    projectTemplates={data.projectTemplates}
    description={data.description}
>
    {data.description}
</Program>
