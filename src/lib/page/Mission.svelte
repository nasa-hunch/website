<script>
	import { inview } from 'svelte-inview';

	let inView = false;
</script>

<div
	class="wrap"
	use:inview={{
		rootMargin: '-100px'
	}}
	on:inview_enter={() => (inView = true)}
>
	<div class="inner" class:inView={inView}>
		<h2>The mission is simple.</h2>
		<div class="cards">
			<div class="card">
				<div class="cardInner">
					<div class="cardTitleWrap">
						<h3>Empower:</h3>
					</div>
					<p>
						We offer students a real-world STEM experience, and drive students to learn new skills
						and create particle products that are sent to the International Space Station.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="cardInner">
					<div class="cardTitleWrap">
						<h3>Inspire:</h3>
					</div>
					<p>
						NASA Hunch is on a mission to inspire students through our project-based experiences. We
						encourage students to create new innovations and discover their passions.
					</p>
				</div>
			</div>
			<div class="card">
				<div class="cardInner">
					<div class="cardTitleWrap">
						<h3>Prepare:</h3>
					</div>
					<p>
						Participants are prepared for the real-world. Our program focuses on critical thinking
						and problem solving skills. We expose students to rigorous challenges and cultivate
						collaboration and communication skills.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.inner {
		width: 90%;
		display: flex;
		flex-direction: column;
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

	h2 {
		width: 100%;
		text-align: center;
		font-size: 2.5rem;
	}
	.cards {
		display: flex;
		width: 100%;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.card {
		width: 33%;
		flex-grow: 1;
		min-width: 340px;
		padding: 20px;
		box-sizing: border-box;
	}
	.cardInner {
		background: #f1f1f1;
		box-sizing: border-box;
		padding: 10px;
		border-radius: 10px;
		height: 100%;
	}
	.cardTitleWrap {
		display: flex;
		flex-direction: row;
		padding: 0px 25px;
	}
	.card h3 {
		display: flex;
		position: relative;
		font-size: 2rem;
		font-weight: bold;
		margin: 0px;
	}
	.card h3::after {
		content: '';
		bottom: 0px;
		left: 0px;
		position: absolute;
		height: 2px;
		width: 100%;
		background: #dd361c;
	}
</style>
