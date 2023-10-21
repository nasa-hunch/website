<header>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/6qA9iaAUo8k?controls=0&autoplay=1&mute=1&playsinline=1"
			title="We Persevere"
			frameborder="0"
			allow="autoplay"
			allowfullscreen
		/>
	</div>
	<div class="container">
		<h1>Make for NASA</h1>
	</div>
	<h2>
		Apply real-life skills to real-life problems @ NASA, through the design and fabrication of
		valued products to be used in space.
	</h2>
</header>

<style>
	.container {
		margin: 10rem auto;
		width: fit-content;
	}

	h1 {
		background: white;
		margin: 0.5rem;
		border-radius: 1rem;
		padding: 0 2rem;
		mix-blend-mode: screen;
		font-size: 15rem;
		color: #595959;
		font-weight: 900;
		line-height: 1;
	}

	h2 {
		font-size: 5rem;
		font-family: 'Lexend Variable', sans-serif;
		color: #595959;
		font-weight: 400;
		background: white;
		mix-blend-mode: screen;
		border-radius: 1rem;
		width: fit-content;
		margin: 0 max(2rem, auto);
		padding: 0.5rem 2rem;
	}

	.video-container {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
	}

	iframe {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100vw;
		height: 100vh;
		transform: translate(-50%, -50%);
		z-index: -1;
	}

	header {
		text-align: center;
		padding: 5rem 0;
	}
</style>
