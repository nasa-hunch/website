<script  lang="ts">
    export let visibile = false;
    let clickHelper = (e: MouseEvent) {

    }
</script>

<button class="wrap" on:click={clickHelper}>
</button>

<style>
    .wrap {
        all: unset;
        background: rgba(0, 0, 0, 0.5);
    }
</style>