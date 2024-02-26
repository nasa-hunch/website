<script lang="ts">
	import Section from '$lib/page/Section.svelte';
	import ian from '$lib/partners/images/Ian.jpg';
	import lee from '$lib/partners/images/Lee.jpg';
	import lily from '$lib/partners/images/Lily.jpg';
	import mentor from '$lib/partners/images/mentor.jpg';
	import owen from '$lib/partners/images/Owen.jpg';
	import partner from '$lib/partners/images/partner.jpg';
	import volunteer from '$lib/partners/images/volunteer.jpg';
</script>

<main>
	<Section title="Get Involved with NASA Hunch" />

	<div class="getInvolved">
		<div class="item">
			<img alt="Partner" src={partner} />
			<div class="content">
				<h2>Partner with Us</h2>
				<p>
					Become a HUNCH partner and provide equipment or funding for participating schools and
					students.
				</p>
			</div>
		</div>
		<div class="item">
			<img alt="Mentor" src={mentor} />
			<div class="content">
				<h2>Mentor a Team</h2>
				<p>
					Guide high school students as they apply their skills and create exciting projects that
					may one day reach space.
				</p>
			</div>
		</div>
		<div class="item">
			<img alt="Volunteer" src={volunteer} />
			<div class="content">
				<h2>Volunteer</h2>
				<p>Volunteer your time at a local HUNCH event near you! It’ll be fun!</p>
			</div>
		</div>
	</div>

	<div class="quotes">
		<div class="quote">
			<img alt="Lily England" src={lily} />
			<blockquote>
				<p>
					"Working with several machines, using Mastercam software and making flight hardware for
					the ISS was life changing. Also, as an intern and mentor, it gave me the opportunity to
					teach other students what I knew about machining and engineering. This, without a doubt,
					helped me get my job at Sam Houston."
				</p>
				<br />
				<footer>
					<p>Lily England</p>
					<cite
						>Lab Coordinator for the Engineering Technology Dept. at Sam Houston State University</cite
					>
				</footer>
			</blockquote>
		</div>
		<div class="quote">
			<img alt="Owen Theeck" src={owen} />
			<blockquote>
				<p>
					"I had the opportunity of a lifetime to be able to work on projects that are now onboard
					the International Space Station and used at various NASA facilities in the US which have
					truly been influential accomplishments for me, other students and to the space program.
					Given my invaluable experience, regardless of the career path that you pick or the
					interest that you may have, the HUNCH program instills students with the knowledge and
					expertise that will lead to a promising future."
				</p>
				<br />
				<footer>
					<p>Owen Theeck</p>
					<cite
						>Aviation Business Administration student at Embry-Riddle Aeronautical University</cite
					>
				</footer>
			</blockquote>
		</div>
		<div class="quote">
			<img alt="Lee Hansen" src={lee} />
			<blockquote>
				<p>
					"Working with the HUNCH program throughout high school helped not only to improve my
					sewing skills but also to better understand project management and work flow over long
					term projects. Learning the responsibilities as well as technical skills made my college
					experience even more rewarding."
				</p>
				<br />
				<footer>
					<p>Lee Hansen</p>
					<cite>Softgoods Specialist</cite>
				</footer>
			</blockquote>
		</div>
		<div class="quote">
			<img alt="Ian West" src={ian} />
			<blockquote>
				<p>
					"Interning for HUNCH gave me that edge I needed to land this job. I appreciate what HUNCH
					offers for students to get real world experience. Now I get to program and machine every
					day."
				</p>
				<br />

				<footer>
					<p>Ian West</p>
					<cite>HUNCH Intern</cite>
				</footer>
			</blockquote>
		</div>
	</div>
</main>

<style lang="scss">
	.getInvolved {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 1em;
	}

	.item {
		flex: 1;
		margin: 1em;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
		border-radius: 1rem;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	.item img {
		width: 100%;
		height: 18rem;
		object-fit: cover;
	}

	.item .content {
		padding: 1em;
	}

	.quotes {
		gap: 1.5rem;
		display: flex;
		flex-direction: column;
		margin: 1rem 2rem;
	}

	.quote {
		display: flex;
		align-items: center;
		/* MAYBE
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
		padding: 1rem;
		border-radius: 1rem;
		*/
	}

	.quote img {
		height: 100%;
		width: 10rem;
		border-radius: 50%;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
	}

	.quote blockquote footer {
		text-align: right;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.quote blockquote footer p {
		color: $primary;
		font-weight: bold;
	}

	.quote p {
		margin: 0;
	}

	@media screen and (min-width: 1400px) {
		main {
			max-width: 80%;
			margin: auto;
		}
	}

	@media screen and (max-width: 900px) {
		.quote img {
			display: none;
		}

		.quote blockquote footer {
			flex-direction: column;
		}

		.getInvolved {
			flex-direction: column;
		}
	}
</style>
