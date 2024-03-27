<script lang="ts">
	import { inview } from 'svelte-inview';
	export let options = {
		href: '',
		src: '',
		caption: '',
		multiplier: 1
	};

	let inView = false;
</script>

<div class="wrap" on:inview_enter={() => (inView = true)} use:inview={{ unobserveOnEnter: true }}>
	<div class="item" class:inView>
		<div style="background-image: url({options.src})" class="bg" />
		<a class="link" href={options.href}>
			<div class="caption">
				{options.caption}
			</div>
		</a>
	</div>
</div>

<style lang="scss">
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
		opacity: 0;

		&.inView {
			animation: fadeIn 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
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
