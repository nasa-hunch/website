<script lang="ts">
	import { snakeCaseToTitleCase } from '$lib/case.js';

    export let data;
</script>

<main>
    <h1>{data.org.name}</h1>

    <h2>Projects</h2>
    <div class="projects">
        {#each data.org.projects as project}
            <a class="project" href="/dashboard/projects/{project.id}">
                <h2>{project.projectTemplate.name}</h2>
                <p>
                    {project.users
                        .map(({ user }) => `${user.firstName} ${user.lastName}`)
                        .join(', ')}
                </p>
            </a>
        {/each}
    </div>

    <h2>Users</h2>

    <div class="users">
        {#each data.org.users as user}
            <a class="user" href="/dashboard/users/{user.id}">
                <img src={user.pfp} alt={user.firstName} />
                <div class="content">
                    <p>{user.firstName} {user.lastName}</p>
                    {#if user.role && user.role !== 'STUDENT'}
                        <p class="role">{snakeCaseToTitleCase(user.role)}</p>
                    {/if}
                </div>
            </a>
        {/each}
    </div>
</main>

<style lang="scss">
    main {
        margin: 1rem;
    }

    .users {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }

    .role {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        margin: 0;
        font-size: 0.8rem;
        color: var(--text-alt);
        background-color: rgba(221, 54, 28, 0.25);
        border: 1px solid #dd361c;
    }

    .user {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: var(--background-alt);
        color: black;

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }

    .projects {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }

    .project {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: var(--background-alt);
        color: black;
        flex-direction: column;
        justify-content: space-between;
        text-decoration: underline;
    }
</style>
