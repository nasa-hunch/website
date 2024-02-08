<script lang="ts">
	import { Role } from '$lib/enums';
	import type { PageData } from './$types';

	let projectsDropped = false;

	let adminDropped = false;

	export let data: PageData;
</script>

<nav class="nav">
	<div class="top">
		<div class="indent">
			<a href="/dashboard" class="logoButton">
				<img src="/favicon.png" alt="Nasa Hunch Logo" />
			</a>
			<a href="/dashboard" class="button">Dashboard</a>
			<a href="/dashboard/projects" class="button">Projects</a>
			{#if projectsDropped}
				<div class="indent" />
			{/if}
			{#if data.user.role == Role.HUNCH_ADMIN}
				<a href="##" on:click={() => (adminDropped = !adminDropped)} class="button">Admin</a>
			{/if}
			{#if adminDropped}
				<div class="indent dd">
					<a href="/dashboard/admin/users" class="button">Users</a>
				</div>
				<div class="indent dd">
					<a href="/dashboard/admin/projects" class="button">Projects</a>
				</div>
			{/if}
		</div>
	</div>
	<div class="bottom">
		<a href="#/dashboard/notifications" class="button bottomButton">
			<img width="30px" class="bottomIcon" src="/notifications.svg" alt="Notifications" />
		</a>
		<a href="/dashboard/settings" class="button bottomButton">
			<img width="30px" class="bottomIcon" src="/settings.svg" alt="Settings" />
		</a>
		<form action="/logout" method="POST">
			<button class="button bottomButton" type="submit">
				<img width="30px" class="bottomIcon" src="/logout.svg" alt="Log Out" />
			</button>
		</form>
	</div>
</nav>

<style>
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
	.dd {
		position: relative;
	}
	.dd::after {
		content: '';
		position: absolute;
		height: 100%;
		left: 10px;
		top: 0px;
		width: 1px;
		background: rgb(161, 161, 161);
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
