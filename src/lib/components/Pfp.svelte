<script lang="ts">
	export let user: {
		pfp: string | null
		firstName: string,
		lastName: string
	}

	export let size = "24px";
	export let marginRight = "10px";
</script>


<img src={user.pfp || "/defaultPfp.svg"} alt="{user.firstName} {user.lastName}" style="width: {size}; height: {size}; margin-right: {marginRight}"/>


<style lang="scss">
	img {
		border-radius: 100%;
		aspect-ratio: 1/1;
		background: $background;
	}
</style>
