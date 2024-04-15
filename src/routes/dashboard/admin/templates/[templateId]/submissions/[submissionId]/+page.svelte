<script lang="ts">
	import UserCard from '$lib/components/card/UserCard.svelte';
    import FileManager from '$lib/fileManager/FileManager.svelte';

    export let data;
</script>

<h1>
    Submission by
    <a href="/dashboard/org/{data.submission.organization.id}">
        {data.submission.organization.name}
    </a>
</h1>

<h2>Members</h2>

<div class="cards">
    {#each data.submission.users as { user }}
        <UserCard {user} />
    {/each}
</div>

<h2>Files</h2>

<FileManager files={data.submission.files.map(({ file }) => file)} actions={false} />

<style lang="scss">
    a {
        color: $primary;
    }
    
    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }
</style>
