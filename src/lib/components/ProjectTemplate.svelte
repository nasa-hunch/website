<script lang="ts">
	import sanitizeHtml from 'sanitize-html';

	export let data: {
		projectTemplate: {
			name: string;
			description: string;
			category: {
				id: string;
				slug: string;
				name: string;
				color: string;
			}[];
		};
	};

	export let presentation = false;
</script>

<div class="content">
	<div class="inner">
		<h1 class="name">{data.projectTemplate.name}</h1>
		{#if presentation}
			<p>
				Categories:
				{#each data.projectTemplate.category as category, i}
					<a style="--color: #{category.color}" class="program" href="/programs/{category.slug}"
						><span class="name">{category.name}</span></a
					>
				{/each}
			</p>
			<hr />
		{/if}
		{@html sanitizeHtml(data.projectTemplate.description)}
		<hr />
		{#if presentation}
			<p>
				Interested on working with this project? Invite your school, coordinate with NASA admins,
				and <a href="/get-started">Get started</a>!
			</p>
		{/if}
	</div>
</div>

<style lang="scss">
	.content {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.inner {
		max-width: 700px;
		margin: 0 1rem;
	}

	.name {
		text-align: center;
	}

	.program {
		background-color: var(--color);
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		margin: 0 0.25rem;
		color: white;

		.name {
			font-weight: bold;
			filter: invert(1);
		}
	}
</style>
