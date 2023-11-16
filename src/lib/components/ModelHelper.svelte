<script  lang="ts">
    export let visibile = false;
    let buttonElement: HTMLButtonElement;

    let clickHelper = (e: MouseEvent) => {
        if(e.target == buttonElement) {
            visibile = false;
        }
    }

    let keyHelper = (e: KeyboardEvent) => {
        console.log(e.key)
    }

</script>

<svelte:window on:keydown={keyHelper}/>
<button class="wrap" bind:this={buttonElement} on:click={clickHelper}>
    <slot/>
</button>

<style>
    .wrap {
        all: unset;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0px;
        left: 0px;
    }
</style>