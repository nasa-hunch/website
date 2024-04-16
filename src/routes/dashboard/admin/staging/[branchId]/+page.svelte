<script lang="ts">
	import { enhance } from '$app/forms';
	export let data;
	import Button from '$lib/components/Button.svelte';
	import dayjs from 'dayjs';
    import IconButton from "$lib/components/IconButton.svelte"
    import Modal from "$lib/components/Modal.svelte"
    import ModalForm from "$lib/components/ModalForm.svelte"
    import PencilIcon from "~icons/mdi/pencil"
    import TrashIcon from "~icons/mdi/trash"
    import Input from "$lib/components/Input.svelte"
    import DatePicker from "$lib/components/DatePicker.svelte"

    import {page} from "$app/stores"
	import { pushState } from '$app/navigation';
	import FormItemSpacer from '$lib/components/FormItemSpacer.svelte';

    let selectedStage: typeof data.stages[0]
    let confirmationText: string = "";
</script>

{#if $page.state.modal == "editStage"}
<Modal on:close={() => {history.back()}}>
    <ModalForm method="POST" action="?/editStage">
        <h2>Edit Stage</h2>
        <input hidden value={selectedStage.id} name="stageId"/>
        <Input label="Name" name="name" value={selectedStage.name}/>
        <FormItemSpacer/>
        <DatePicker name="dueDate" label="Due Date" value={selectedStage.dueDate}/>
        <FormItemSpacer/>
        <Button value="Update"/>
    </ModalForm>
</Modal>
{/if}

{#if $page.state.modal == "deleteStage"}
<Modal on:close={() => {history.back()}}>
    <ModalForm method="POST" action="?/deleteStage">
        <h2>Delete Stage</h2>
        <p>This action can not be reversed.</p>
        <p>To confirm, type <strong style="font-weight: bold;">{selectedStage.name}</strong> below</p>
        <input hidden value={selectedStage.id} name="stageId"/>
        <Input label="Confirm" name="confirm" bind:value={confirmationText}/>
        <FormItemSpacer/>
        <Button disabled={confirmationText != selectedStage.name} value="Delete"/>
    </ModalForm>
</Modal>
{/if}

<div class="wrap">
	<div class="stages">
		{#each data.stages as stage}
			<div class="stage">
                <div class="left">
                    <p><span>{stage.name}</span> - <span>{dayjs(stage.dueDate).format("MM/DD/YY")}</span></p>
                </div>
				<div class="right">
                    <IconButton tooltip={"Edit"} on:click={() => {
                        selectedStage = stage;
                        pushState("", {
                            modal: "editStage"
                        })
                    }}>
                        <PencilIcon height="1.5rem" width="1.5rem"/>
                    </IconButton>
                    <IconButton tooltip={"Delete"} on:click={() => {
                        selectedStage = stage;
                        pushState("", {
                            modal: "deleteStage"
                        })}}>
                        <TrashIcon height="1.5rem" width="1.5rem"/>
                    </IconButton>
                </div>
			</div>
		{/each}
	</div>

	<form action="?/createStage" method="post" use:enhance>
		<Button value="New Stage" />
	</form>
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		margin: 1rem 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
    .stages {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
	.stage {
		width: 100%;
		background: $background-alt;
        padding: 0rem 1rem;
        border-radius: 0.25rem;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
	}

    .right {
        display: flex;
        flex-direction: row;
        height: 100%;
        align-items: center;
        justify-content: end;
    }
</style>
