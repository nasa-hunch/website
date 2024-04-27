<script lang="ts">
	import { geoAlbersUsa, geoIdentity, geoPath } from 'd3-geo';
	import type { GeoJsonProperties } from 'geojson';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { Canvas, Layer, type Render } from 'svelte-canvas';
	import { inview } from 'svelte-inview';
	import { mesh } from 'topojson-client';
	import type { Objects, Topology } from 'topojson-specification';
	import usRaw from 'us-atlas/counties-albers-10m.json';
	import { UsaStates } from 'usa-states';
	import { clickOutside } from '$lib/actions/clickOutside';
	import Fuse from 'fuse.js';

	import { getState } from './map/remap';

	const opacity = tweened(0.01, {
		duration: 1000,
		easing: cubicOut
	});

	const opacityElements = tweened(0.01, {
		duration: 5000,
		easing: cubicOut
	});

	let mouseX = 0;
	let mouseY = 0;

	const us = usRaw as unknown as Topology<Objects<GeoJsonProperties>>;

	let canvas: HTMLElement;
	let width: number;

	$: projection = geoIdentity().scale(width / 975);
	$: path = geoPath(projection);
	$: geoAlbersInstance = geoAlbersUsa().scale(1300).translate([487.5, 305]);

	let pixelData: [number, number][];
	$: pixelData = locations
		.map(({ coordinates }) => {
			const [lat, lng] = coordinates.split(',').map(Number);

			const coords = geoAlbersInstance([lng, lat]);

			if (!coords) return undefined;

			return projection(coords);
		})
		.filter((x) => Array.isArray(x) && x.length === 2) as [number, number][];

	const filterState = (name: string | undefined) =>
		usRaw.objects.states.geometries.filter((country) => country.properties.name == name)[0];

	const { states } = new UsaStates();
	const abbrToName = Object.fromEntries(states.map((state) => [state.abbreviation, state.name]));

	let selectedState: string | undefined = undefined;
	let activeState: string | undefined = undefined;
	let selectedStateCursor: [number, number] | undefined = undefined;
	$: foundState = filterState(activeState);
	$: foundSelectedState = filterState(selectedState);
	$: selectedLocations = locations.filter(
		(location) => abbrToName[location.state] == selectedState
	);
	const render: Render = ({ context }) => {
		for (let i = 0; i < pixelData.length; i++) {
			const [x, y] = pixelData[i];
			context.beginPath();
			context.arc(x, y, 2, 0, 2 * Math.PI);
			context.fillStyle = `rgba(221, 54, 28, ${$opacityElements - i / pixelData.length})`;
			context.fill();
		}

		const mouseProjection = projection.invert([mouseX, mouseY]);

		if (!mouseProjection || !geoAlbersInstance.invert) {
			activeState = undefined;
			return;
		}

		const albersProjection = geoAlbersInstance.invert(mouseProjection);

		if (!albersProjection) {
			activeState = undefined;
			return;
		}

		const state = getState(albersProjection);
		if (!state) {
			activeState = undefined;
			return;
		}

		activeState = state.name;
	};

	const dataAmount = tweened(0, {
		duration: 2000,
		easing: cubicOut
	});

	const studentLocations = tweened(0, {
		duration: 2000,
		easing: cubicOut
	});

	interface LocationLike {
		name: string;
		state: string;
		address: string;
		city: string;
		zip: string;
		coordinates: string;
	}

	let searchLocations = '';

	$: fuse = new Fuse(selectedLocations, {
		keys: ['name', 'city', 'address', 'zip']
	});

	$: searchedLocations = searchLocations
		? fuse.search(searchLocations).map((data) => data.item)
		: selectedLocations;

	export let locations: LocationLike[];
</script>

<h2>Connecting Students <span class="accent">Nationwide</span></h2>

<h3>
	<span class="accent">{Math.round($studentLocations)}</span> students from
	<span class="accent">{Math.round($dataAmount)}</span> locations
</h3>

{#if selectedState && selectedStateCursor}
	<div
		style="top: {selectedStateCursor[1]}px; left: {selectedStateCursor[0]}px"
		class="cursorModal"
		data-lenis-prevent
	>
		<h3>{selectedState}</h3>
		{#if searchedLocations.length > 0}
			<input bind:value={searchLocations} placeholder="Search Locations..." />
			{#each searchedLocations as location}
				<p>
					<a
						href="https://www.google.com/maps/search/{encodeURIComponent(
							location.address
						)}+{encodeURIComponent(location.city)}+{encodeURIComponent(
							location.state
						)}+{encodeURIComponent(location.zip)}"
						rel="noopener noreferrer"
						target="_blank">{location.name}</a
					>
				</p>
			{/each}
		{:else}
			<p><i>No locations in this area.<br /><a href="/get-started">Perhaps you can be the first?</a></i></p>
		{/if}
	</div>
{/if}

<div class="wrap">
	<div
		class="canvas {activeState ? 'hoveringState' : ''}"
		on:inview_enter={() => {
			opacity.set(2);
			opacityElements.set(2);
			dataAmount.set(locations.length);
			studentLocations.set(2575);
		}}
		use:clickOutside={() => {
			selectedState = undefined;
		}}
		use:inview={{ unobserveOnEnter: true }}
	>
		<svg style="opacity: {$opacity / 2.5 - 0.5}">
			{#if foundSelectedState}
				<path class="selectedState" d={path(mesh(us, foundSelectedState))} />
			{/if}
		</svg>
		<svg style="opacity: {$opacity / 2.5 - 0.5}">
			{#if foundState}
				<path class="selectedState" d={path(mesh(us, foundState))} />
			{/if}
		</svg>
		<svg style="opacity: {$opacity}">
			{#if us}
				<path d={path(mesh(us, usRaw.objects.states))} />
			{/if}
		</svg>
		<svg style="opacity: {$opacity / 2.5 - 0.5}">
			{#if us}
				<path d={path(mesh(us, usRaw.objects.counties))} />
			{/if}
		</svg>
		<div bind:this={canvas} class="canvasWrap">
			<Canvas
				style="position: absolute"
				autoplay
				on:resize={({ detail }) => (width = detail.width)}
				on:mousemove={(e) => {
					mouseX = e.clientX - canvas.getBoundingClientRect().left;
					mouseY = e.clientY - canvas.getBoundingClientRect().top;
				}}
				on:click={(e) => {
					if (selectedState == activeState) {
						selectedState = undefined;
					} else {
						selectedState = activeState;
						selectedStateCursor = [e.pageX, e.pageY];
					}
				}}
			>
				<Layer {render} />
			</Canvas>
		</div>
	</div>
</div>

<style lang="scss">
	h2,
	h3 {
		width: 100%;
		text-align: center;
		font-weight: 500;
		font-family: 'Lexend Variable', sans-serif;
		font-size: 1.5rem;
		margin-top: 0;
		margin-bottom: 0.75rem;
	}

	h2 {
		font-size: 3rem;
	}

	.cursorModal {
		position: absolute;
		z-index: 10;
		background: white;
		border: 1px solid black;
		border-radius: 0.5rem;
		padding: 1rem;
		overflow-y: scroll;
		max-height: 500px;

		input {
			width: 100%;
			padding: 0.5rem;
			border: 1px solid black;
			border-radius: 0.5rem;
		}

		a {
			color: $primary;
		}
	}

	.accent {
		color: $primary;
		font-family: inherit;
	}

	div.wrap {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		align-items: stretch;
		gap: 1rem;
		padding: 1rem;
	}

	div.canvas {
		position: relative;
		height: 100%;
		width: 80%;
		aspect-ratio: 975 / 610;
		border: 4px solid black;
		border-radius: 1rem;

		&.hoveringState:hover {
			cursor: pointer;
		}
	}

	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		aspect-ratio: 975 / 610;
		border-radius: 1rem;
	}

	path {
		stroke: #ccc;
		fill: transparent;
	}

	.selectedState {
		fill: rgba(221, 54, 28, 0.5);
	}
</style>
