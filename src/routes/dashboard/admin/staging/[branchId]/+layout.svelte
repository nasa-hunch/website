<script lang="ts">
	import { goto, pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import Combobox from '$lib/components/Combobox.svelte';
	import Input from '$lib/components/Input.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ModalForm from '$lib/components/ModalForm.svelte';
	export let data;

	const setBranch = (value: string) => {
		goto(`/dashboard/admin/staging/${value}`);
	};
</script>

{#if $page.state.modal == 'createBranch'}
	<Modal
		on:close={() => {
			history.back();
		}}
	>
		<ModalForm action="?/createBranch" method="post">
			<h2>Create Branch</h2>
			<Input name="name" label="Name" />
			<hr />
			<Button value="Create Branch" />
		</ModalForm>
	</Modal>
{/if}

<div class="wrap">
	<div class="inner">
		<div class="toolbar">
			<div class="action">
				<Combobox
					style="width: 15rem"
					label="Branch"
					options={[data.branches, (branch) => branch.name, (branch) => branch.id]}
					placeholder={data.branch.name}
					on:selectOption={(e) => {
						setBranch(e.detail.value);
					}}
				/>
			</div>
			<div class="action">
				<Button
					value="Create Branch"
					on:click={() => {
						pushState('', {
							modal: 'createBranch'
						});
					}}
				/>
			</div>
		</div>
		<slot />
	</div>
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		padding-top: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;

		.inner {
			width: 90%;
		}
	}

	.toolbar {
		display: flex;
		align-items: center;
		justify-content: start;

		.action {
			margin: 0rem 0.5rem;
		}
	}

	hr {
		border: 0px;
	}
</style>
