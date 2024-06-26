<script lang="ts">
	import MdiAccountCircle from '~icons/mdi/account-circle';
	import MdiEmail from '~icons/mdi/email';
	import MdiPhone from '~icons/mdi/phone';
	import Section from '$lib/page/Section.svelte';

	export let data;
</script>

<main>
	<Section title="Our Team">
		<p>
			We are a team of <span class="highlight">dedicated</span>
			individuals who are passionate about the education and success of our program. We are committed
			to providing the
			<span class="highlight">best</span> possible experience for our students and are always looking
			for ways to improve.
		</p>
	</Section>

	<div class="members">
		{#each data.members as member}
			<div class="member">
				<img alt={member.name} src={member.pfp} />
				<div class="content">
					<h2>
						{member.name}
					</h2>
					<div class="memberAttr">
						<div class="icon">
							<MdiAccountCircle />
						</div>
						<p>{member.role}</p>
					</div>
					{#if member.email}
						<div class="memberAttr">
							<div class="icon">
								<MdiEmail />
							</div>
							<p><a href="mailto:{member.email}">{member.email}</a></p>
						</div>
					{/if}
					{#if member.phone}
						<div class="memberAttr">
							<div class="icon">
								<MdiPhone />
							</div>
							<p>{member.phone}</p>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</main>

<style lang="scss">
	.members {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 1rem;
		align-items: left;
	}

	.member {
		margin: 1rem;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
		border-radius: 1rem;
		width: 20rem;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.01);
	}

	.memberAttr {
		display: flex;

		p {
			word-wrap: break-word;
			width: 90%;
		}
	}

	.icon {
		margin-right: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: $primary;
	}

	img {
		width: 100%;
		aspect-ratio: 1 / 1;
		margin: 0 auto;
		object-fit: cover;
		border-radius: 1rem 1rem 0 0;
		border-bottom: 4px solid $primary;
	}

	.content {
		text-align: left;
		padding: 1rem;

		h2 {
			color: $primary;
			font-weight: 700;
		}
	}

	p {
		margin: 0;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.highlight {
		color: $primary;
		font-weight: 700;
	}

	@media screen and (min-width: 1400px) {
		main {
			max-width: 80%;
			margin: auto;
		}
	}
</style>
