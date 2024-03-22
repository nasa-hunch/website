<script lang="ts">
	export let data;
</script>

<div class="wrap">
	<div class="header">
		<div class="headerInner">
			<h1>{data.projectTemplate.name}</h1>
			<nav class="nav">
				<a href="/dashboard/admin/projects/category/{data.category.id}/{data.projectTemplate.id}"
					>Info</a
				>
				<a href="/dashboard/admin/projects/category/{data.category.id}/{data.projectTemplate.id}/participants"
					>Participants ({data.projectUserCount})</a
				>
				<a href="/dashboard/admin/projects/category/{data.category.id}/{data.projectTemplate.id}/submissions"
					>Submissions ({data.projectCount})</a
				>
			</nav>
		</div>
	</div>
	<slot />
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		height: 100%;
	}
	.header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: $background-alt;
	}
	.headerInner {
		width: 90%;
	}

	.nav {
		display: flex;
		flex-direction: row;
		overflow-x: auto;

		a {
			all: unset;
			position: relative;
			cursor: pointer;
			padding: 3px;
			margin-right: 20px;
			text-decoration: none;
			font-size: 1.1rem;
			transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;

			&::after {
				content: '';
				position: absolute;
				left: 0px;
				bottom: 0px;
				width: 100%;
				height: 2px;
				background: $primary;
				transform: scaleX(0);
				transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
			}

			&:hover {
				color: $primary;

				&::after {
					transform: scaleX(1);
				}
			}
		}
	}
</style>
