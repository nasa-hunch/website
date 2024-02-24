<script lang="ts">
	import ProgressGauge from '$lib/components/ProgressGauge.svelte';
	import { cubicInOut } from 'svelte/easing';
	import type { PageData } from './$types';
	import { tweened } from 'svelte/motion';
	import { onMount } from 'svelte';

	export let data: PageData;

	let percentDone = tweened(0, {
		duration: 1000,
		easing: cubicInOut
	})

	onMount(() => {
		percentDone.set(12)
	})
</script>

<main>
	<div class="title">
		<h1>Check List</h1>
		<div class="progress">
			<ProgressGauge percentDone={$percentDone} fill="var(--green)" strokeWidth={4}/>
		</div>
		
	</div>
	
	
</main>

<style lang="scss">
	main {
		margin: 1rem;
	}
	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.progress {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		margin-left: 20px;
	}
</style>
