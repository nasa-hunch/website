<script lang="ts">
	export let data;
</script>

<main>
	<h1>Admin Dashboard</h1>

	<p>
		As a <span class="accent">NASA Hunch</span> admin, you can do many things. You can
		<a href="/dashboard/admin/users">manage users</a>,
		<a href="/dashboard/admin/organizations">manage organizations</a>,
		<a href="/dashboard/admin/categories">manage categories</a>, and much more! Explore the sidebar
		on your left to learn more about this dashboard.
	</p>

	<h2>Statistics</h2>

	<ul>
		<li>Users: {data.userCount}</li>
		<li>Projects: {data.projectCount}</li>
		<li>Organizations: {data.orgCount}</li>
	</ul>

	<div class="citation">
		<svg height="5rem" viewBox="0 0 512 512" width="5rem" xmlns="http://www.w3.org/2000/svg">
			<path
				d="m482.22 44.844l-50.533 46.25l-21.937 57.22c-34.637 15.445-47.955 24.442-61.47 74.874l39.564-17.657l-1.875 32.095l37.342 14.344l21.75-24.5l17.625 39.56c24.52-42.467 25.663-63.24 4.282-96.78l21.936-57.22l-6.687-68.186zM389.093 263.22c-16.33 25.16-38.017 48.57-63.063 68.217c-.022.018-.038.045-.06.063c-37.302 23.693-83.27 29.138-118.095 15.688c16.236 15.056 37.635 20.705 59.156 19.156c-49.41 14.874-102.32 9.118-139.624-14.28c14.142 19.334 34.493 31.22 56.97 36.592c-58.93 3.328-117.894-19.792-162.44-84l.002 168.03c65.91 28.65 135.148 19.62 196.218-11.56l-16.97 35.78l88.126-85.03h-.093c2-1.796 3.973-3.6 5.936-5.438l-11.28 43.937l59.812-99.438c19.668-27.56 35.253-57.384 45.406-87.718z"
			/>
		</svg>
		<p>
			<b>"</b>The dream is alive<b>"</b>

			<cite class="accent">- John Young</cite>
		</p>
	</div>
</main>

<style lang="scss">
	main {
		margin: 1rem;
	}

	.accent {
		color: $primary;
	}

	path {
		fill: $primary;
	}

	.citation {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
</style>
