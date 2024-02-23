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
		<blockquote>
			<img alt="Lily England" src={lily} />
			<p>
				Working with several machines, using Mastercam software and making flight hardware for the
				ISS was life changing. Also, as an intern and mentor, it gave me the opportunity to teach
				other students what I knew about machining and engineering. This, without a doubt, helped me
				get my job at Sam Houston.
			</p>
			<footer>
				Lily England, <cite
					>Lab Coordinator for the Engineering Technology Dept. at Sam Houston State University</cite
				>
			</footer>
		</blockquote>
		<blockquote>
			<img alt="Owen Theeck" src={owen} />
			<p>
				I had the opportunity of a lifetime to be able to work on projects that are now onboard the
				International Space Station and used at various NASA facilities in the US which have truly
				been influential accomplishments for me, other students and to the space program. Given my
				invaluable experience, regardless of the career path that you pick or the interest that you
				may have, the HUNCH program instills students with the knowledge and expertise that will
				lead to a promising future.
			</p>
			<footer>
				Owen Theeck, <cite
					>Lab Coordinator for the Engineering Technology Dept. at Sam Houston State University</cite
				>
			</footer>
		</blockquote>
		<blockquote>
			<img alt="Lee Hansen" src={lee} />
			<p>
				Working with the HUNCH program throughout high school helped not only to improve my sewing
				skills but also to better understand project management and work flow over long term
				projects. Learning the responsibilities as well as technical skills made my college
				experience even more rewarding.
			</p>
			<footer>
				Lee Hansen, <cite
					>Softgoods Specialist</cite
				>
			</footer>
		</blockquote>
		<blockquote>
			<img alt="Ian West" src={ian} />
			<p>
				Interning for HUNCH gave me that edge I needed to land this job. I appreciate what HUNCH offers for students to get real world experience. Now I get to program and machine every day.
			</p>
			<footer>
				Ian West, <cite
					>HUNCH Intern</cite
				>
			</footer>
		</blockquote>
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

	@media screen and (min-width: 1400px) {
		main {
			max-width: 80%;
			margin: auto;
		}
	}
</style>
