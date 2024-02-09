<script lang="ts">
	export let image: string;
	export let image2: string;
	export let title: string;

	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<header>
	<div style="--img: url({image}); --top: {scrollY}px" class="background" />
	<div style="--img: url({image2})" class="wrapper">
		<div class="text">
			<h1><img class="img" alt="NASA Hunch Logo" src="/logo.svg" />{title}</h1>
			<h2>Make for space.</h2>
		</div>
	</div>
</header>

<style lang="scss">
	header {
		margin: 0px;
		padding: 0px;
		overflow: hidden;
		perspective: 1px;
	}

	.wrapper,
	.background {
		width: 100%;
		height: calc(100vh - 100px);
		display: flex;
		flex-direction: row;
		align-items: end;
		justify-content: flex-start;
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
		transform: translateY(calc(var(--top) / 2));
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
