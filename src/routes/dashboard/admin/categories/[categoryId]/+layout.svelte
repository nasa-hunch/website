<script lang="ts">
	export let data;
	import { page } from '$app/stores';
	import ColorCircle from '$lib/components/ColorCircle.svelte';
	let route = '';
	$: route = $page.route.id?.split('/').at(-1) || '';
	$: console.log(route);
	$: isHunchAdmin = data.user.role === 'HUNCH_ADMIN';
</script>

<div class="wrap">
	<div class="header">
		<div class="headerInner">
			<div class="headerText">
				<ColorCircle value={'#' + data.category.color} />
				<h1 class:no-margin-bottom={isHunchAdmin}>{data.category.name}</h1>
			</div>
			<nav class="nav">
				<a
					class:active={route.toLowerCase() !== 'edit'}
					href="/dashboard/admin/categories/{data.category.id}">Projects</a
				>
				<a
					class:active={route.toLowerCase() === 'edit'}
					href="/dashboard/admin/categories/{data.category.id}/edit">Edit</a
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

		.headerText {
			display: flex;
			gap: 1rem;
			align-items: center;
			margin: 1.3rem 0;
		}

		.headerText h1 {
			margin-top: 0;
		}
	}

	.content {
		width: 90%;
	}

	.no-margin-bottom {
		margin-bottom: 0;
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

			&.active {
				color: $primary;

				&::after {
					transform: scaleX(1);
				}
			}
		}
	}
</style>
