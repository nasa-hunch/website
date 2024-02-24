<script lang="ts">
	import * as d3 from "d3"

	/**
	 * Whole Number, ex: 55 = 55% 
	 */
	export let percentDone = 55;
	export let fill = "#0c0c0c";
	export let height = 30;
	export let width = 30;
	export let strokeWidth = 3;

	const createArc = d3.arc()

	let arc = createArc({
		innerRadius: width/2 - strokeWidth,
		outerRadius: width/2,
		startAngle: 0,
		endAngle: 0,
	});

	$: if(percentDone) {
		arc = createArc({
		innerRadius: width/2 - strokeWidth,
		outerRadius: width/2,
		startAngle: 0,
		endAngle: (percentDone/100) * (Math.PI * 2)
	});
	}


	

	const bgArc = createArc({
		innerRadius: width/2 - strokeWidth,
		outerRadius: width/2,
		startAngle: 0,
		endAngle: Math.PI * 2
	})
	

</script>

<svg height="{height}px" width="{width}px">
	<path height="100%" width="100%" transform="translate({width/2}, {height/2})" {fill} d={arc}></path>
	<path height="100%" width="100%" transform="translate({width/2}, {height/2})" fill={fill} d={bgArc} opacity="0.15"></path>
</svg>
