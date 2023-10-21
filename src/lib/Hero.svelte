<header>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/6qA9iaAUo8k?controls=0&autoplay=1&mute=1&playsinline=1&showinfo=0&autohide=1?modestbranding=1&loop=1"
			title="We Persevere"
			frameborder="0"
			allow="autoplay"
			allowfullscreen
		/>
	</div>
	<div class="container">
		<h1>Make for NASA</h1>
		<div class="container-small">
			<h2>Solve real-world problems.</h2>
			<h2>Create real-world impact.</h2>
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
	.container {

		background: #ccc;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.container h1 {
		border-radius: 1rem;
		margin: 0px;
		margin-top: 10rem;
		mix-blend-mode: screen;
		font-size: 15rem;
		color: #ddd;
		font-weight: 900;
		line-height: 1;
	}

	.container-small {
		margin: 5rem auto;
		width: fit-content;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.container h2 {
		margin: 0px;
		font-size: 5rem;
		font-family: 'Lexend Variable', sans-serif;
		color: black;
		font-weight: 700;
		background: #ccc;
		mix-blend-mode: screen;
		border-radius: 1rem;
		width: fit-content;
		padding: 0.25rem 1rem;
	}

	



	.video-container {
		width: 100%;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		filter: brightness(0.5);
		pointer-events: none;
	}

	iframe {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100vh;
		z-index: -1;
	}
	
</style>
