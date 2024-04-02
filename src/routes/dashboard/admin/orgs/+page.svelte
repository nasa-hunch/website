<script lang="ts">
    export let data;
</script>

<main>
    <h1>Organizations</h1>

    <div class="organizations">
        {#each data.organizations as org}
            <a class="org" href="/dashboard/admin/orgs/{org.id}">
                <h2>{org.name}</h2>
            </a>
        {/each}
    </div>
</main>

<style lang="scss">
    main {
        margin: 1rem;
    }

    .organizations {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;

        .org {
            background: white;
            padding: 1rem;
            border-radius: 0.5rem;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            color: black;
        }
    }
</style>
