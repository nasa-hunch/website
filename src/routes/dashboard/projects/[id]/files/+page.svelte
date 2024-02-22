<script lang="ts">
	
    export let data;
    import { enhance } from "$app/forms";
    
    let fileUploadButton: HTMLButtonElement;
	let fileBox: HTMLInputElement

    


    const dropHandler = async (e: DragEvent) => {
		e.preventDefault();
		if(!e.dataTransfer) {
			return;
		}
		fileBox.files = e.dataTransfer.files;
		fileUploadButton.click()
		
	}
	const dragOverHandler = (e: Event) => {
		e.preventDefault()
	}
</script>

<form hidden method="post" action="?/uploadFile" use:enhance>
	<input type="file" bind:this={fileBox} name="file"/>
	<button bind:this={fileUploadButton}></button>
</form>


<div class="wrap">
    <div class="fileExplorer">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="fileList" on:drop={dropHandler} on:dragover={dragOverHandler}>
            {#each data.files as file}
                <div class="file">
                    {file.name}
                </div>
            {/each}
        </div>
        <div class="fileView">

        </div>
    </div>
</div>



<style lang="scss">
    .fileExplorer {
        width: 100%;
        height: 100%;
        background: $background2;
        border-radius: 5px;
        margin-top: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
    }
    .fileList {
        min-width: 200px;
        min-height: 200px;
        border-right: 1px solid $background3;
    }
    .fileView {
        height: 100%;
        width: 100%;
    }
</style>
