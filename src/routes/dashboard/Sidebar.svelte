<script lang="ts">
	import { Role } from '$lib/enums';

	import type { PageData } from './$types';

	export let data: PageData;

	import { tooltip } from '@svelte-plugins/tooltips';

	import BellIcon from '~icons/mdi/bell';
	import HomeIcon from '~icons/mdi/home';
	import SettingsIcon from '~icons/mdi/settings';

	import DashboardIcon from "~icons/mdi/view-dashboard"
	import UsersIcon from "~icons/mdi/account-group"
	import OrgIcon from "~icons/mdi/domain"
	import CatIcon from "~icons/mdi/group"
	import StagingIcon from "~icons/mdi/chart-gantt"
	import ProjectIcon from "~icons/mdi/cube-outline"
</script>

<nav class="nav">
	<div class="top">
		<div class="indent">
			<a class="logoButton" href="/dashboard">
				<img alt="Nasa Hunch Logo" src="/favicon.png" />
			</a>
			<a class="button" href="/dashboard">
				<div class="icon">
					<DashboardIcon/>
				</div>
				Dashboard
			</a>
			{#if data.user.role == Role.HUNCH_ADMIN}
			<a class="button" href="/dashboard/admin/users">
				<div class="icon">
					<UsersIcon/>
				</div>
				Users
			</a>
			<a class="button" href="/dashboard/admin/orgs">
				<div class="icon">
					<OrgIcon/>
				</div>
				Organizations
			</a>
			<a class="button" href="/dashboard/admin/categories">
				<div class="icon">
					<CatIcon/>
				</div>
				Categories
			</a>
			<a class="button" href="/dashboard/admin/staging">
				<div class="icon">
					<StagingIcon/>
				</div>
				Staging
			</a>
			{:else if data.user.role == Role.ORG_ADMIN}
			<a class="button" href="/dashboard/orgs/{data.user.orgId}">
				<div class="icon">
					<OrgIcon/>
				</div>
				My Organization
			</a>
			{:else}
				<a class="button" href="/dashboard/projects">
					<div class="icon">
						<ProjectIcon/>
					</div>
					Projects
				</a>
			{/if}
		</div>
	</div>
	<div class="bottom">
		<a
			class="button bottomButton"
			href="/dashboard/notifications"
			use:tooltip={{ content: 'Notifications', action: 'hover', arrow: false, animation: 'fade' }}
		>
			<BellIcon height="30px" width="30px" />
		</a>
		<a
			class="button bottomButton"
			href="/dashboard/settings"
			use:tooltip={{ content: 'Settings', action: 'hover', arrow: false, animation: 'fade' }}
		>
			<SettingsIcon height="30px" width="30px" />
		</a>
		<a
			class="button bottomButton"
			href="/"
			use:tooltip={{ content: 'Home', action: 'hover', arrow: false, animation: 'fade' }}
		>
			<HomeIcon height="30px" width="30px" />
		</a>
	</div>
</nav>

<style lang="scss">
	.nav {
		background: #323a45;
		height: 100vh;
		width: 250px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}
	.top {
		background: #323a45;
		height: 100%;
		padding-right: 10px;
		box-sizing: border-box;
		width: 250px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}
	.indent {
		padding-left: 10px;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}
	.bottom {
		padding-bottom: 20px;
		display: flex;
		flex-direction: row;
	}

	.logoButton {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		box-sizing: border-box;
		width: 100%;
	}
	.button {
		text-align: left;
		border: 0px;
		outline: 0px;
		box-sizing: border-box;
		padding: 5px 10px;
		color: #ffffff;
		font-size: 1.2rem;
		text-decoration: none;
		width: 100%;
		border-radius: 5px;
		background-color: transparent;
		cursor: pointer;
		display: flex;

		.icon {
			margin-right: 0.5rem;
		}
	}
	.button:hover {
		background: #212121;
	}
	.button:focus {
		background: rgb(33, 33, 33, 0.5);
	}

	.bottomButton {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
		margin: 0px 10px;
	}
</style>
