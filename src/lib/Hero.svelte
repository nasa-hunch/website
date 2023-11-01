<script lang="ts">
	export let image: string;
	export let title: string;
</script>

<header>
	<!-- TODO: give this life on the main page -->
	<div class="wrapper" style="--img: url({image})">
		<div class="text">
			<h1><img class="img" src="/favicon.png" alt="NASA Hunch Logo" />{@html title}</h1>
			<h2>Make for space.</h2>
		</div>
	</div>
</header>

<style>
	header {
		margin: 0px;
		padding: 0px;
		text-align: center;
		overflow: hidden;
	}

	.wrapper {
		width: 100%;
		height: calc(100vh - 100px);
		display: flex;
		flex-direction: row;
		align-items: end;
		justify-content: flex-start;
		/* clip-path: polygon(0 0, 100% 0, 100% calc(100% - 2vw), 0 100%); TODO: curve this :D */
	}

	.wrapper::before {
		background-image: var(--img);
		content: '';
		position: absolute;
		width: 100%;
		height: calc(100vh - 100px);
		background-size: cover;
		background-position: center;
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
		font-size: 4rem;
		margin: 0;
		margin-bottom: 3rem;
	}
</style>
