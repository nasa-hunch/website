<header>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/mtsWDWCCSG0?controls=0&autoplay=1&mute=1&playsinline=1&showinfo=0&autohide=1?modestbranding=1&loop=1&playlist=mtsWDWCCSG0"
			title="We Persevere"
			frameborder="0"
			allow="autoplay"
			allowfullscreen
		/>
	</div>
	<div class="container">
		<h1>Make for NASA</h1>
		<div class="container-small">
			<h2>Solve real-world problems.<br>Create real-world impact.</h2>
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
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.container h1 {
		margin-top: 10rem;
		text-shadow: 2px 2px 0 #ddd, -2px 2px 0 #ddd, -2px -2px 0 #ddd, 2px -2px 0 #ddd;
		font-size: 15rem;
		color: rgba(0, 0, 0, 0.3);
		font-weight: 900;
		line-height: 1;
		mix-blend-mode: hard-light; 
		
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
		background: #ccc;
		border-radius: 1rem;
		width: fit-content;
		padding: 0.25rem 1rem;
		text-shadow: 2px 2px 0 #ccc, -2px 2px 0 #ccc, -2px -2px 0 #ccc, 2px -2px 0 #ccc;
		color: rgba(0, 0, 0, 0.3);
		font-weight: 700;
		line-height: 1;
		mix-blend-mode: hard-light; 
	}

	.video-container {
		width: 100%;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(255, 255, 255, 0.5);
		filter: brightness(0.3);
		pointer-events: none;
		z-index: -1;
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
