<nav class="nav">
	<div class="top">
		<a href="/dashboard" class="logoButton">
			<img src="/favicon.png" alt="Nasa Hunch Logo">
		</a>
		<a href="/dashboard/profile" class="button">Dashboard</a>
		<a href="/dashboard/profile" class="button">Projects</a>
	</div>
	<div class="bottom">
		<a href="/dashboard/notifications" class="button bottomButton">
			<img width="30px" class="bottomIcon" src="/notifications.svg" alt="logout">
		</a>
		<a href="/dashboard/settings" class="button bottomButton">
			<img width="30px" class="bottomIcon" src="/settings.svg" alt="logout">
		</a>
		<a href="/dashboard/signout" class="button bottomButton" >
			<img width="30px" class="bottomIcon" src="/logout.svg" alt="logout">
		</a>
	</div>
</nav>	

<style>
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
		width: 250px;
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
		border: 0px;
		outline: 0px;
		box-sizing: border-box;
		padding: 5px;
		color: #ffffff;
		font-size: 1.2rem;
		text-decoration: none;
		width: calc(100% - 15px);
		border-radius: 5px;
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