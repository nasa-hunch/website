<script lang="ts">
	export let data;

	$: isHunchAdmin = data.user.role === 'HUNCH_ADMIN';
</script>

<div class="wrap">
	<div class="header">
		<div class="headerInner">
			<h1 class:no-margin-bottom={isHunchAdmin}>{data.project.projectTemplate.name}</h1>
			{#if isHunchAdmin}
				<h2>
					<a href="/dashboard/orgs/{data.project.orgId}">{data.project.organization.name}</a>
				</h2>
			{/if}

			<nav class="nav">
				<a href="/dashboard/projects/{data.project.id}">Checklist</a>
				<a href="/dashboard/projects/{data.project.id}/files">Files</a>
				<a href="/dashboard/projects/{data.project.id}/members">Members</a>
				<a href="/dashboard/projects/{data.project.id}/submission">Submission</a>
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
		}
	}
</style>
