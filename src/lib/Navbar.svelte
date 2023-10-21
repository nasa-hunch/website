<nav>
	<a href="/" class="logoLink">
		<img alt="NASA Hunch Logo" src="/favicon.png"/>
	</a>
	<ul class="navInner">
		
		
		<li class="navButton navRegularLink">
			<a href="/about">About</a>
			
		</li>
		<li class="navButton navRegularLink">
			<a href="/programs">Programs</a>
			
		</li >
		<li class="navButton navRegularLink">
			<a href="/partners">Partners</a>
			
		</li>
		<li class="navButton navRegularLink">
			<a href="/connect">Connect</a>
		</li>
		<li class="specialButton navButton" >
			<a href="/get-started">Get Started</a>
		</li>
	</ul>
	
</nav>

<style>
	nav {
		position: sticky;
		z-index: 10000;
		width: 100%;
		top: 0;
		height: 100px;
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
	}

	
	
	.navInner {
		list-style-type: none;
		width: 100%;
		height: 100%;
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
		content: "";
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 4px;
		background: #dd361c;
		transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
		transform: scale(0.0, 1);
	}

	.navRegularLink a:hover {
		color: #dd361c;
		transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	.navRegularLink a:hover::after {
		width: 100%;
		transform: scale(1, 1);
	}
	
	.navButton {
		padding: 0px 10px;
	}

	
	.specialButton {
		background-size: 300%;
		background-position: 100%;
		background-image: linear-gradient(to right, #99231b 40%, #dd361c 60%);
		transition: all 0.2s ease-in-out;
	}
	.specialButton:hover {
		background-position: 0%;
	}
	.specialButton a {
		color: #f1f1f1;
	}

	
</style>