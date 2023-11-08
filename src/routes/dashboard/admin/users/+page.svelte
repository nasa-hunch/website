<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1>User Management Panel</h1>

{#each data.userList as user}
    <!-- TODO: proper user display -->
    <p>{user.id}</p>
{/each}