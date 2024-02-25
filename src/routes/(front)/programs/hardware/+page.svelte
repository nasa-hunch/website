<script lang="ts">
	import Program from '$lib/Program.svelte';

	const tabs = [
		{
			name: 'Identify',
			description: 'Identify the problem and the needs of the user.'
		},
		{
			name: 'Research',
			description: 'Research the problem and the needs of the user.'
		},
		{
			name: 'Imagine',
			description: 'Imagine a solution to the problem.'
		},
		{
			name: 'Plan',
			description: 'Plan the solution to the problem.'
		},
		{
			name: 'Prototype',
			description: 'Create a prototype of the solution to the problem.'
		},
		{
			name: 'Test',
			description: 'Test the prototype of the solution to the problem.'
		},
		{
			name: 'Refine',
			description: 'Refine the prototype of the solution to the problem.'
		}
	].map((tab, i) => ({
		...tab,
		active: i === 0
	}));

	$: activeTab = tabs.find((t) => t.active);
</script>

<Program program="Hardware">
	<div slot="subtitle">
		<!-- Design the next idea <span class="accent">out of this world</span>. -->
		<span class="accent">Design</span> and <span class="accent">fabricate</span>
		with <span class="accent">space-ready</span> rigor.
	</div>
	<div slot="main">
		<p>
			Hardware is in high demand aboard NASA. Students participating in this program work with this
			demand to create hardware that is space-ready, requested by various NASA departments.
		</p>

		<h2>Cycle through the <span class="accent">engineering process</span>.</h2>

		<div class="tabs">
			{#each tabs as tab}
				<button
					class:active={tab.active}
					on:click={() => {
						tabs.forEach((t) => (t.active = false));
						tab.active = true;
					}}
				>
					{tab.name}
				</button>
			{/each}
		</div>
		{#if activeTab}
			<div class="tabInfo">
				{activeTab.description}
			</div>
		{/if}
	</div>
</Program>

<style lang="scss">
	.accent {
		color: $primary;
	}

	h2 {
		text-align: center;
	}

	.tabs {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		background-color: lightgray;
		width: 100%;

		button {
			padding: 1rem;
			background-color: transparent;
			cursor: pointer;
			border: 0;
			flex: 1 1 0;

			&:hover {
				background-color: $primary;
				color: white;
			}

			&.active {
				background-color: $primary;
				color: white;
			}
		}
	}

	.tabInfo {
		padding: 1rem;
		background-color: color.adjust(lightgray, $lightness: 20%);
	}
</style>
