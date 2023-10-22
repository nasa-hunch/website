<script context="module" lang="ts">
	export type StatType = {
		name: string,
		value: number,
		suffix?: string
	};
</script>

<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { inview } from 'svelte-inview';
	
	export let stats: StatType[];

	let scrollY = 0;

	const tweening = tweened(0, {
		duration: 3000,
		easing: cubicOut
	});
</script>

<svelte:window bind:scrollY />

<div class="stats">
	<h3>Reach</h3>
	
	<ul class="statList" use:inview on:inview_enter={() => tweening.set(1)}>
		{#each stats as stat} 
			<li>
				<p>{Math.floor(stat.value * $tweening)}{stat.suffix ?? ""}</p>
				<h4>{stat.name}</h4>
				
			</li>
		{/each}
	</ul>
	
</div>

<style>
	.stats {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #061f4a;
		color: white;
		padding: 3rem 0px;
	}
	.stats h3 {
		font-size: 3rem;
		font-family: 'Lexend Variable', sans-serif;
		font-weight: 500;
		margin: 0px;
		margin-bottom: 2rem;
		padding: 0px;
		position: relative;
	}
	.statList {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		list-style-type: none;
		padding: 0px;
		margin: 0px;
		width: 100%;
	}
	.statList li {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		margin: 0px 1rem;
		padding: 0px;
		width: 100%;
	}
	.statList p {
		font-size: 4rem;
		font-family: 'Lexend Variable', sans-serif;
		font-weight: 500;
		margin: 0px;
		padding: 0px;
		position: relative;
	}
	.statList h4 {
		font-size: 1.5rem;
		font-family: 'Lexend Variable', sans-serif;
		font-weight: 300;
		margin: 0px;
		padding: 0px;
		position: relative;
	}
</style>
