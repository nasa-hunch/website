<script lang="ts">
    import type { PageData } from "../$types";
    export let data: PageData;
</script>
<main>
    {#each [...data.user.projectUser.map(user => user.project), ...data.user.ownedProjects] as project}
		<a class="project" href="/dashboard/projects/{project.id}">
			<p>{project.name}</p>
		</a>
	{/each}
</main>

<style>
    main {
        margin: 1rem;
    } 
</style>