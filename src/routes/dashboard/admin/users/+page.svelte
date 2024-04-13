<script lang="ts">
	import { toast } from 'svelte-french-toast';

	import ChevronLeft from '~icons/mdi/chevron-left';
	import ChevronRight from '~icons/mdi/chevron-right';
	import FilterIcon from '~icons/mdi/filter';
	import { goto, pushState, replaceState } from '$app/navigation';
	import { page } from '$app/stores';
	import { snakeCaseToTitleCase } from '$lib/case';
	import Button from '$lib/components/Button.svelte';
	import Combobox from '$lib/components/Combobox.svelte';
	import Filter from '$lib/components/Filter.svelte';
	import IconButton from '$lib/components/IconButton.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ModalForm from '$lib/components/ModalForm.svelte';
	import ModalWrap from '$lib/components/ModalWrap.svelte';
	import MdiAccountPlus from '~icons/mdi/account-plus';
	import { Role } from '$lib/enums';

	import type { PageData } from './$types';

	export let data: PageData;

	let selectedUserId = '';

	const perPageOptions = [10, 25, 50, 100];

	type DeleteData = {
		id: string;
		firstName: string;
		lastName: string;
	};

	const roleFilter = Object.keys(Role).map((item) => {
		return {
			name: snakeCaseToTitleCase(item),
			value: item
		};
	});
	let roleFilterComponent: Filter;

	let deleteData: DeleteData | undefined = undefined;

	let deletePerson = (id: string, firstName: string, lastName: string) => {
		pushState('', {
			modal: 'deleteUser'
		});
		deleteData = {
			id,
			firstName,
			lastName
		};
	};

	function inviteUserModal() {
		pushState('', {
			modal: 'inviteUser'
		})
	}

	export let form;
	$: if (form) {
		if (form.success) {
			toast.success(form.message || 'Action Success!');
		} else {
			toast.error(form.message || 'Action Failed!');
		}
	}

	let userDifferenceBetweenPerPage = 0;
	$: userDifferenceBetweenPerPage = data.sortMeta.perPage - data.userList.length;

	const pageCountHandler = (e: Event) => {
		let count: number = parseInt((e.currentTarget as HTMLElement).innerText);
		count = isNaN(count) ? 1 : count;
		count = Math.min(data.sortMeta.totalPages, Math.max(count, 1));
		$page.url.searchParams.set('page', count.toString());
		(e.currentTarget as HTMLElement).innerHTML = count.toString();
		goto($page.url, {
			invalidateAll: true
		});
	};

	const changePage = (count: number) => {
		const url = $page.url;
		url.searchParams.set('page', (data.sortMeta.page + count).toString());
		goto(url, {
			invalidateAll: true
		});
	};

	const roles = ['HUNCH_ADMIN', 'ORG_ADMIN', 'TEACHER', 'STUDENT'];

	let selectedRole = 'unknown';

	const setItemsPerPage = (itemsPerPage: number) => {
		$page.url.searchParams.set('perPage', itemsPerPage.toString());
		goto($page.url, {
			invalidateAll: true
		});
	};
</script>

<Filter bind:this={roleFilterComponent} filters={roleFilter} param="role" />

{#if $page.state.modal === 'deleteUser'}
	<Modal on:close={() => history.back()}>
		<ModalForm action="?/deleteUser" method="post">
			<p>Are you sure you want to delete user #{deleteData?.id}</p>
			<Button value={`Delete ${deleteData?.firstName} ${deleteData?.lastName}'s account`} />
		</ModalForm>
	</Modal>
{/if}

{#if $page.state.modal === 'verifyUser'}
	<Modal on:close={() => history.back()}>
		<ModalForm action="?/verifyUser" method="post">
			<h2>Verify User</h2>
			<input name="id" hidden bind:value={selectedUserId} />
			<Combobox
				name="orgId"
				label="Organization"
				options={[data.orgList, (orgItem) => orgItem.name.toString(), (orgItem) => orgItem.id]}
			/>
			<hr class="spacer" />
			<Button value="verify" />
		</ModalForm>
	</Modal>
{/if}

{#if $page.state.modal === 'inviteUser'}
	<Modal on:close={() => history.back()}>
		<ModalForm 
			method="POST"
			action="?/inviteUser"
			enhanceBody={() => {
				return async ({ update }) => {
					await update();
					replaceState('', {
						modal: 'inviteSent'
					})
				}
			}}
		>
			<h2>Invite User</h2>

			<Combobox
				name="role"
				label="Role"
				bind:value={selectedRole}
				options={[
					['HUNCH_ADMIN', 'ORG_ADMIN', 'TEACHER', 'STUDENT'],
					role => snakeCaseToTitleCase(role),
					role => role
				]}
			/>
			{#if selectedRole !== 'HUNCH_ADMIN' && roles.includes(selectedRole)}
				<div class="margin-separator" />
				<Combobox 
					name="organization"
					label="Organization"
					options={[
						data.orgList,
						org => org.name,
						org => org.id
					]}
				/>
			{/if}
			<div class="margin-separator" />
			<Button type="submit" value="Invite" />
		</ModalForm>
	</Modal>
{/if}

{#if $page.state.modal === 'inviteSent'}
	<Modal on:close={() => history.back()}>
		<ModalWrap>
			{#if form && form.invite}
				<h2>Invite Generated</h2>
				<p>An invite has generated.</p>
				<p>Code: {form.invite.joinCode}</p>
				<p>Link: <a href="/invite/{form.invite.joinCode}">
					{location.origin}/invite/{form.invite.joinCode}
				</a></p>
			{:else}
				<p>Waiting for server response.</p>
			{/if}
		</ModalWrap>
	</Modal>
{/if}

<main>
	<h1>
		User Management Panel
		<button class="plus" on:click={inviteUserModal}>
			<MdiAccountPlus width="2rem" height="2rem"/>
		</button>
	</h1>

	<table>
		<tr class="headRow row">
			<th>Email</th>
			<th>First Name</th>
			<th>Last Name</th>
			<th
				>Role
				<IconButton
					style="margin-left: 0.25rem"
					on:click={(e) => roleFilterComponent.propagateClick(e)}
				>
					<FilterIcon />
				</IconButton>
			</th>
			<th>Actions</th>
		</tr>
		{#each data.userList as user}
			<tr class="row">
				<td>{user.email}</td>
				<td>{user.firstName}</td>
				<td>{user.lastName}</td>
				<td>{user.role ? snakeCaseToTitleCase(user.role) : 'Unknown'}</td>
				<td>
					{#if user.role != Role.HUNCH_ADMIN}
						<button
							on:click={() => {
								deletePerson(user.id, user.firstName, user.lastName);
							}}>delete</button
						>
					{/if}
				</td>
			</tr>
		{/each}
		{#each { length: userDifferenceBetweenPerPage } as i}
			<tr id="fakeRow-{i}" class="row" />
		{/each}
	</table>
	<div class="navigators">
		<div class="left">
			<IconButton
				disabled={data.sortMeta.page == 1}
				on:click={() => {
					changePage(-1);
				}}
			>
				<ChevronLeft height="1.75rem" width="1.75rem" />
			</IconButton>
			<IconButton
				disabled={data.sortMeta.page == data.sortMeta.totalPages}
				on:click={() => {
					changePage(1);
				}}
			>
				<ChevronRight height="1.75rem" width="1.75rem" />
			</IconButton>
			<span>
				Page <span class="pageNumber"
					><span contenteditable="true" on:blur={pageCountHandler}>{data.sortMeta.page}</span>/{data
						.sortMeta.totalPages}
				</span>
			</span>
		</div>
		<div class="right">
			<span>Items per page</span>
			{#each perPageOptions as perPageOption}
				<button
					class:selected={data.sortMeta.perPage == perPageOption}
					on:click={() => {
						setItemsPerPage(perPageOption);
					}}
				>
					{perPageOption}
				</button>
			{/each}
		</div>
	</div>
</main>

<style lang="scss">
	h1 {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		.plus {
			background: none;
			border: none;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	main {
		width: 100%;
		box-sizing: border-box;
	}
	table {
		width: 100%;
		background: #f1f1f1;
		padding: 1rem;
		box-sizing: border-box;
		border-radius: 5px;
	}
	.navigators {
		width: 100%;
		background: #f1f1f1;
		padding: 1rem;
		padding-top: 0px;
		box-sizing: border-box;
		border-radius: 5px;
		display: flex;

		.left {
			height: 100%;
			display: flex;
			align-items: center;
			width: 100%;
		}

		.right {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: end;
			span {
				margin-right: 0.5rem;
			}
			button {
				cursor: pointer;
				margin: 0px 0.1rem;
				padding: 0.25rem;
				font-size: 1rem;
				border: 1px solid $background3;
				background: $background2;
				border-radius: 0.1rem;
				&:hover {
					border: 1px solid black;
					background: rgba(0, 0, 0, 0.15);
				}
				&.selected {
					border: 1px solid black;
					font-weight: bold;
					background: rgba(0, 0, 0, 0.25);
				}
			}
		}
	}
	.row {
		height: 1.75rem;
	}
	tr {
		width: 100%;
		display: flex;
	}
	th,
	td {
		width: 100%;
		display: flex;
		align-items: start;
		justify-content: start;
		overflow: hidden;
	}
	.margin-separator {
		margin-bottom: 1rem;
	}
	.headRow {
		border-bottom: 1px solid rgba(0, 0, 0, 0.25);
		margin-bottom: 5px;
		position: sticky;

		th {
			display: flex;
			align-items: center;
		}
	}
	.spacer {
		height: 0px;
		border: 0px;
		outline: 0px;
		background: transparent;
	}
	h2 {
		text-align: center;
	}
</style>
