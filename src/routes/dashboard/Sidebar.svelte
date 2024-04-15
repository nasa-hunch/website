<script lang="ts">
	import { Role } from '$lib/enums';

	import type { PageData } from './$types';

	export let data: PageData;

	import { tooltip } from '@svelte-plugins/tooltips';

	import UsersIcon from '~icons/mdi/account-group';
	import SponsorIcon from '~icons/mdi/attach-money';
	import BellIcon from '~icons/mdi/bell';
	import BlogIcon from '~icons/mdi/blog';
	import StagingIcon from '~icons/mdi/chart-gantt';
	import ProjectIcon from '~icons/mdi/cube-outline';
	import OrgIcon from '~icons/mdi/domain';
	import CatIcon from '~icons/mdi/group';
	import HomeIcon from '~icons/mdi/home';
	import MapIcon from '~icons/mdi/map';
	import SettingsIcon from '~icons/mdi/settings';
	import StaffIcon from '~icons/mdi/shield-account';
	import DashboardIcon from '~icons/mdi/view-dashboard';
	import MdiWeb from '~icons/mdi/web';

	let websiteDropdownEnabled = false;
</script>

<nav class="nav">
	<div class="top">
		<div class="indent">
			<a class="logoButton" href="/dashboard">
				<img alt="Nasa Hunch Logo" src="/favicon.png" />
			</a>
			<a class="button buttonCenter" href="/dashboard">
				<div class="icon">
					<DashboardIcon height="23px" width="23px" />
				</div>
				<span class="buttonText">Dashboard</span>
			</a>
			{#if data.user.role == Role.HUNCH_ADMIN}
				<a class="button buttonCenter" href="/dashboard/admin/users">
					<div class="icon">
						<UsersIcon height="23px" width="23px" />
					</div>
					<span class="buttonText">Users</span>
				</a>
				<a class="button buttonCenter" href="/dashboard/admin/orgs">
					<div class="icon">
						<OrgIcon height="23px" width="23px" />
					</div>
					<span class="buttonText">Organizations</span>
				</a>
				<a class="button buttonCenter" href="/dashboard/admin/categories">
					<div class="icon">
						<CatIcon height="23px" width="23px" />
					</div>
					<span class="buttonText">Categories</span>
				</a>
				<a class="button buttonCenter" href="/dashboard/admin/staging">
					<div class="icon">
						<StagingIcon height="23px" width="23px" />
					</div>
					<span class="buttonText">Staging</span>
				</a>
				<button
					class="button buttonCenter"
					on:click={() => (websiteDropdownEnabled = !websiteDropdownEnabled)}
				>
					<div class="icon">
						<MdiWeb height="23px" width="23px" />
					</div>
					<span class="buttonText">Website</span>
				</button>
				{#if websiteDropdownEnabled}
					<div class="indent">
						<a class="button buttonCenter" href="/dashboard/admin/website/staff">
							<div class="icon">
								<StaffIcon height="23px" width="23px" />
							</div>
							<span class="buttonText">Staff</span>
						</a>
						<a class="button buttonCenter" href="/dashboard/admin/website/blog">
							<div class="icon">
								<BlogIcon height="23px" width="23px" />
							</div>
							<span class="buttonText">Blog</span>
						</a>
						<a class="button buttonCenter" href="/dashboard/admin/website/map">
							<div class="icon">
								<MapIcon height="23px" width="23px" />
							</div>
							<span class="buttonText">Map</span>
						</a>
						<a class="button buttonCenter" href="/dashboard/admin/website/sponsors">
							<div class="icon">
								<SponsorIcon height="23px" width="23px" />
							</div>
							<span class="buttonText">Sponsors</span>
						</a>
					</div>
				{/if}
			{:else if data.user.role == Role.ORG_ADMIN}
				<a class="button buttonCenter" href="/dashboard/orgs/{data.user.orgId}">
					<div class="icon">
						<OrgIcon height="23px" width="23px" />
					</div>
					<span class="buttonText">My Organization</span>
				</a>
			{:else}
				<a class="button buttonCenter" href="/dashboard/projects">
					<div class="icon">
						<ProjectIcon height="23px" width="23px" />
					</div>
					<span class="buttonText">Projects</span>
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
			display: flex;
			align-items: center;
		}
	}
	.button:hover {
		background: #212121;
	}
	.button:focus {
		background: rgb(33, 33, 33, 0.5);
	}

	.buttonCenter {
		display: flex;
		align-items: center;
		justify-content: start;
	}

	.bottomButton {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
		margin: 0px 10px;
	}

	@media (max-width: 768px) {
		.nav {
			width: fit-content;
		}
		.top {
			width: fit-content;
			padding-right: 0;
		}

		.indent {
			padding: 0;
		}
		.button {
			padding: 10px;
			font-size: 1rem;
			width: fit-content;
		}
		.logoButton {
			display: none;
			visibility: none;
		}

		.bottom {
			padding-bottom: 10px;
			flex-direction: column;
			align-items: center;
		}
		.bottomButton {
			margin: 5px 0;
		}

		.buttonText {
			display: none;
			visibility: hidden;
		}

		.icon {
			margin-right: 0 !important;
		}
	}
</style>
