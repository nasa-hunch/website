<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher<{ close: void }>();

  let buttonElement: HTMLButtonElement;

  let clickHelper = (e: MouseEvent) => {
    if (e.target == buttonElement) {
      dispatch('close');
    }
  };

  let keyHelper = (e: KeyboardEvent) => {
    if (e.key == 'Escape') {
      dispatch('close');
    }
  };
</script>

<svelte:window on:keydown={keyHelper} />
<button bind:this={buttonElement} class="wrap" on:mousedown={clickHelper}>
  <slot />
</button>

<style lang="scss">
  .wrap {
    all: unset;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 30;
  }
</style>
