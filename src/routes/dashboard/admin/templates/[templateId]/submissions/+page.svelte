<script lang="ts">
	export let data;
</script>

<div class="wrap">
	{#each data.submissions as submission}
		<div class="submission">
			<p>
				<a href="/dashboard/admin/templates/{data.projectTemplate.id}/submissions/{submission.id}">
					{submission.organization.name}
				</a>
			</p>
		</div>
	{/each}
</div>

<style lang="scss">
	.wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 2rem;
	}

	.submission {
		width: 100%;
		background: $background-alt;
		border-radius: 0.25rem;
		margin-bottom: 0.3rem;
		padding: 0rem 1rem;
		transition: background 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

		a {
			color: black;
		}

		&:hover {
			background: darken($background-alt, 5%);
		}
	}
</style>
