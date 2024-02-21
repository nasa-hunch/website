<script lang="ts">
	export let data;
</script>

<div class="wrap">
	<div class="header">
		<div class="headerInner">
			<h1>{data.project.name}</h1>
			<nav class="nav">
				<a href="/dashboard/projects/{data.project.id}"
					>Checklist</a
				>
				<a href="/dashboard/projects/{data.project.id}"
					>Files</a
				>
				<a href="/dashboard/projects/{data.project.id}"
					>Members</a
				>
				<a href="/dashboard/projects/{data.project.id}"
					>Submission</a
				>
			</nav>
		</div>
	</div>
	<div class="content">
		<slot />
	</div>
	
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: start;
		flex-direction: column;
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

	.content {
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
