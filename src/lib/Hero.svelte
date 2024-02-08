<script lang="ts">
	export let image: string;
	export let image2: string;
	export let title: string;
</script>

<header>
	<!-- TODO: give this life on the main page -->
	<div style="--img: url({image})" class="background" />
	<div style="--img: url({image2})" class="wrapper">
		<div class="text">
			<h1><img class="img" alt="NASA Hunch Logo" src="/logo.svg" />{@html title}</h1>
			<h2>Make for space.</h2>
		</div>
	</div>
</header>

<style lang="scss">
	header {
		margin: 0px;
		padding: 0px;
		overflow: hidden;
	}

	.wrapper,
	.background {
		width: 100%;
		height: calc(100vh - 100px);
		display: flex;
		flex-direction: row;
		align-items: end;
		justify-content: flex-start;
		clip-path: inset(0% 0% 0% 0% round 0 0 min(20vh, 20vw) 0);
	}

	.background {
		z-index: -2;
		background-image: var(--img);
		content: '';
		position: absolute;
		width: 100%;
		height: calc(100vh - 100px);
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
	}

	.wrapper::before {
		background-image: var(--img);
		content: '';
		position: absolute;
		width: 100%;
		height: calc(100vh);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.text,
	.img {
		z-index: 1;
	}

	.text {
		margin-left: 2rem;
	}

	.img {
		width: 7rem;
		margin-right: 1rem;
	}

	h1 {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 7rem;
		font-weight: 900;
		line-height: 1;
		color: white;
		margin: 0;
		margin-bottom: 1rem;
	}

	h2 {
		color: white;
		font-size: 3rem;
		margin: 0;
		margin-bottom: 3rem;
		margin-left: 8.4rem;
	}
</style>
