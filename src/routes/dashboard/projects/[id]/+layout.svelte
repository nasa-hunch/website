<script lang="ts">
	export let data;
	import { page } from '$app/stores';
	let route = '';
	$: switch ($page.route.id?.split('/').at(-1)) {
		case 'checklist':
			route = 'checklist';
			break;
		case 'files':
			route = 'files';
			break;
		case 'members':
			route = 'members';
			break;
		case 'submission':
			route = 'submission';
			break;
		default:
			route = 'overview';
			break;
	}

	$: isHunchAdmin = data.user.role === 'HUNCH_ADMIN';
</script>

<div class="wrap">
	<div class="header">
		<div class="headerInner">
			<h1 class:no-margin-bottom={isHunchAdmin}>
				{data.project.projectTemplate.name}
			</h1>
			{#if isHunchAdmin}
				<h2 class="no-margin-bottom">
					<a href="/dashboard/orgs/{data.project.orgId}">{data.project.organization.name}</a>
				</h2>
				<h2>
					<a href="/dashboard/admin/templates/{data.project.projectTemplate.id}">See Project Template</a>
				</h2>
			{/if}
			<nav class="nav">
				<a
					class:active={route.toLowerCase() === 'overview'}
					href="/dashboard/projects/{data.project.id}">Overview</a
				>
				<a
					class:active={route.toLowerCase() === 'checklist'}
					href="/dashboard/projects/{data.project.id}/checklist">Checklist</a
				>
				<a
					class:active={route.toLowerCase() === 'files'}
					href="/dashboard/projects/{data.project.id}/files">Files</a
				>
				<a
					class:active={route.toLowerCase() === 'members'}
					href="/dashboard/projects/{data.project.id}/members">Members</a
				>
				<a
					class:active={route.toLowerCase() === 'submission'}
					href="/dashboard/projects/{data.project.id}/submission">Submission</a
				>
			</nav>
		</div>
	</div>
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: start;
		flex-direction: column;
	}
	.header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: $background-alt;
	}
	.headerInner {
		width: 90%;
	}

	.content {
		width: 90%;
	}

	.no-margin-bottom {
		margin-bottom: 0;
	}

	h2 {
		font-size: 1.2rem;
		margin-top: 0;

		a {
			color: gray;
		}
	}

	.nav {
		display: flex;
		flex-direction: row;
		overflow-x: auto;

		a {
			all: unset;
			position: relative;
			cursor: pointer;
			padding: 3px;
			margin-right: 20px;
			text-decoration: none;
			font-size: 1.1rem;
			transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;

			&::after {
				content: '';
				position: absolute;
				left: 0px;
				bottom: 0px;
				width: 100%;
				height: 2px;
				background: $primary;
				transform: scaleX(0);
				transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
			}

			&:hover {
				color: $primary;

				&::after {
					transform: scaleX(1);
				}
			}

			&.active {
				color: $primary;

				&::after {
					transform: scaleX(1);
				}
			}
		}
	}
</style>
