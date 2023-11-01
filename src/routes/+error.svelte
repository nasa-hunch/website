<script>
	import Navbar from '$lib/Navbar.svelte';
	import { page } from '$app/stores';
</script>

<Navbar />

<div class="wrap">
	<div class="content">
		<h1 class="title">"Houston, we've had a problem here"</h1>
		<h2><span class="errorCode">{$page.status}</span> {$page.error?.message}</h2>
	</div>
</div>

<style>
	.errorCode {
		color: #dd361c;
	}
	.content {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background: rgba(255, 255, 255, 0.75);
		backdrop-filter: blur(3px);
	}
	.content h1 {
		margin: 0px;
		font-size: 2.5rem;
	}
	.content h2 {
		font-size: 2rem;
	}

	.wrap {
		height: calc(100vh - 100px);
		width: 100%;
		display: flex;
		flex-direction: column;
		background-image: url('/cool_space.jpg');
		background-size: cover;
		background-position: center;
	}
</style>
