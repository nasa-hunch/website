<script lang="ts">
	import video from "$lib/videos/hero.mp4";
</script>

<header>
	<div class="video-container">
		<video autoplay loop muted>
			<source src={video} type="video/mp4" />
		</video>
	</div>
	<div class="wrapper">
		<div class="container">
			<h1>Make for NASA</h1>
			<div class="container-small">
				<h2>Solve real-world problems.<br>Create real-world impact.</h2>
			</div>
		</div>
		<div class="arrow-container">
			<h1 class="arrow">
				↓
			</h1>
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

	.arrow-container {
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.5);
		width: 100px;
		height: 100px;
	}

	.arrow {
		position: relative;
		top: -4rem;
		color: white;
		font-size: 5rem;
		animation: bounce 4s infinite ease-in-out;
	}

	@keyframes bounce {
		0% {
			transform: translateY(0px);
		}
		25% {
			transform: translateY(5px);
		}
		50% {
			transform: translateY(0px);
		}
	}
	
	.wrapper {
		width: 100%;
		height: calc(100vh - 100px);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around; 
	}

	.container {
		height: calc(100vh - 100px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.container h1 {
		margin-top: 10rem;
		text-shadow: 2px 2px 0 #ededed, -2px 2px 0 #ededed, -2px -2px 0 #ededed, 2px -2px 0 #ededed;
		font-size: 10rem;
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
		background: black;
		filter: brightness(0.3);
		pointer-events: none;
		z-index: -1;
	}

	video {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: calc(100vh - 100px);
		object-fit: cover;
		z-index: -1;
	}
	
</style>
