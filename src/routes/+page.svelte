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
	</div>
	<div class="container-small">
		<h2>Solve real-world problems.</h2>
		<h2>Create real-world impact.</h2>
	</div>
</header>

<style>
	.container {
		margin: 10rem auto;
		width: fit-content;
	}

	.container-small {
		margin: 5rem auto;
		width: fit-content;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.container-small h2 {
		margin: 0px;
		font-size: 5rem;
		font-family: 'Lexend Variable', sans-serif;
		color: black;
		font-weight: 700;
		background: #ccc;
		mix-blend-mode: screen;
		border-radius: 1rem;
		width: fit-content;
		padding: 0.5rem 2rem;
	}

	h1 {
		margin: 0.5rem;
		border-radius: 1rem;
		padding: 0 2rem;
		mix-blend-mode: screen;
		font-size: 15rem;
		color: #ddd;
		font-weight: 900;
		line-height: 1;
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
		top: 50%;
		left: 50%;
		width: 100%;
		height: 100vh;
		transform: translate(-50%, -50%);
		z-index: -1;
	}
	header {
		
		text-align: center; 
		padding: 5rem 0;
	}
</style>
