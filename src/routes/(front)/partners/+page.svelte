<script lang="ts">
	import Section from '$lib/page/Section.svelte';
	import mentor from '$lib/partners/images/mentor.jpg';
	import partner from '$lib/partners/images/partner.jpg';
	import volunteer from '$lib/partners/images/volunteer.jpg';
</script>

<Section title="Get Involved" />

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
				Guide high school students as they apply their skills and create exciting projects that may
				one day reach space.
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
</style>
