<script lang="ts">
    export let data;
</script>

<main>
    <div class="title">
        <img src={data.selectedUser.pfp} alt={data.selectedUser.firstName} />
        <h1>{data.selectedUser.firstName} {data.selectedUser.lastName}</h1>
        <h2>{data.selectedUser.email}</h2>
    </div>
</main>

<style lang="scss">
    main {
        margin-top: 1rem;
    }

    .title {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: var(--background-alt);
        color: black;

        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
</style>
