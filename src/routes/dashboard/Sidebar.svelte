<script lang="ts">
	import { Role } from '$lib/enums';

	import type { PageData } from './$types';

	export let data: PageData;

	import BellIcon from '~icons/mdi/bell';
	import HomeIcon from '~icons/mdi/home';
	import SettingsIcon from '~icons/mdi/settings';
</script>

<nav class="nav">
	<div class="top">
		<div class="indent">
			<a class="logoButton" href="/dashboard">
				<img alt="Nasa Hunch Logo" src="/favicon.png" />
			</a>
			<a class="button" href="/dashboard">Dashboard</a>
			{#if data.user.role == Role.HUNCH_ADMIN}
				<a class="button" href="/dashboard/admin/users">Users</a>
				<a class="button" href="/dashboard/admin/orgs">Organizations</a>
				<a class="button" href="/dashboard/admin/projects">Categories</a>
			{:else if data.user.role == Role.SCHOOL_ADMIN}
				<a class="button" href="/dashboard/orgs/{data.user.orgId}">My Organization</a>
			{:else}
				<a class="button" href="/dashboard/projects">Projects</a>
			{/if}
			<a class="button" href="/">Home</a>
		</div>
	</div>
	<div class="bottom">
		<a class="button bottomButton" href="#/dashboard/notifications">
			<BellIcon height="30px" width="30px" />
		</a>
		<a class="button bottomButton" href="/dashboard/settings">
			<SettingsIcon height="30px" width="30px" />
		</a>
		<a class="button bottomButton" href="/">
			<HomeIcon height="30px" width="30px" />
		</a>
	</div>
</nav>

<style lang="scss">
	form {
		display: contents;
	}

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
	}
	.button:hover {
		background: #212121;
	}
	.button:focus {
		background: rgb(33, 33, 33, 0.5);
	}
	.bottomIcon {
		filter: invert(100%);
		size: 20px;
	}
	.bottomButton {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
		margin: 0px 10px;
	}
</style>
