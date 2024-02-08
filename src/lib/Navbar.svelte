<script lang="ts">
	interface Link {
		name: string;
		href: string;
		special?: boolean;
	}

	const link = (name: string, href: string, special?: boolean): Link => {
		return {
			name,
			href: `/${href}`,
			special
		};
	};

	const links = [
		link('Partners', 'partners'),
		link('Programs', 'programs'),
		link('Team', 'team'),
		link('Connect', 'connect'),
		link('Get Started', 'get-started', true)
	];
</script>

<nav>
	<a class="logoLink" href="/">
		<img alt="NASA Hunch Logo" src="/favicon.png" />
	</a>
	<ul class="navInner">
		{#each links as link}
			<li class="navbutton {link.special ? 'specialButton' : 'navRegularLink'}">
				<a href={link.href}>{link.name}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	@import '$lib/utils.scss';

	nav {
		position: sticky;
		z-index: 10000;
		width: 100%;
		top: 0;
		min-height: 100px;
		max-height: 100px;
		background: #f1f1f1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logoLink {
		height: 100%;
		width: 5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0px 3rem;
		transition: opacity 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.navInner {
		list-style-type: none;
		width: 100%;
		height: 100px;
		display: flex;
		padding: 0px;
		margin: 0px;
		flex-direction: row;
		align-items: center;
	}
	.navInner li {
		margin: 0px auto;
		padding: 0px;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.navInner li a {
		text-decoration: none;
		margin: 0px;
		font-size: 1.5rem;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.navRegularLink a {
		color: #212121;
		position: relative;
	}
	.navRegularLink a::after {
		content: '';
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 4px;
		background: $primary;
		transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
		transform: scale(0, 1);
	}

	.navRegularLink a:hover {
		color: $primary;
		transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	.navRegularLink a:hover::after {
		width: 100%;
		transform: scale(1, 1);
	}

	.specialButton {
		background-size: 300%;
		background-position: 100%;
		background-image: linear-gradient(to right, #99231b 40%, $primary 60%);
		transition: all 0.2s ease-in-out;
	}
	.specialButton:hover {
		background-position: 0%;
	}
	.specialButton a {
		color: #f1f1f1;
	}

	.logoLink:hover {
		opacity: 0.6;
	}
</style>
