<script lang="ts">
    export let data;
</script>

<div class='wrap'>
    <table>
        <thead>
            <tr>
                <th>User</th>
                <th>Project</th>
            </tr>
        </thead>
        <tbody>
            {#each data.participants as participant}
            <tr class="projectUserRole">
                <td>{participant.user.firstName} {participant.user.lastName}</td>
                <td>
                    <a href="/dashboard/projects/{participant.project.id}">{participant.project.name}</a>
                </td>
            </tr>
                
            {/each}
        </tbody>
    </table>
</div>

<style lang="scss">
    .wrap {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem 0px;

        table {
            width: 90%;
            background: var(--background-alt);
            border-radius: 5px;
            box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
            padding: 0.25rem;
        }
    }
</style>
