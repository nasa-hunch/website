<script>
	import { fade } from "svelte/transition";
	import {inview} from "svelte-inview"
	import { quadInOut } from "svelte/easing";
	import { tweened } from "svelte/motion";
	export let options = {
		href: "",
		src: "",
		caption: "",
		multiplier: 1
	}

	$: console.log(options)

	const opacity = tweened(0, {
		delay: 150,
		duration: 500,
		easing: quadInOut
	})

</script>



<div class="wrap" use:inview on:inview_enter={() => opacity.set(1)}>
		<div class="item" style="opacity: {$opacity}">
			<div class="bg" style="background-image: url({options.src})"/>
			<a class="link" href={options.href} >
				<div class="caption">
					{options.caption}
				</div>
			</a>

		</div>
		
		
</div>


<style>
	.wrap {
		position: relative;
		min-width: 300px;
		width: 50%;
		flex-grow: 1;
		height: 350px;
	}
	.item {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.bg {
		width: 100%;
		height: 100%;
		position: absolute;
		background-size: cover;
		background-position: center;
		display: flex;
		flex-direction: column;
		justify-content: end;
		text-decoration: none;
		transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.link {
		content: '';
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
		z-index: 3;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		text-decoration: none;
		font-size: 2rem;
	}

	.link:hover {
		background: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(3px);
	}


</style>