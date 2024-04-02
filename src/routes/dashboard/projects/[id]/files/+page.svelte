<script lang="ts">
	import FileManager from '$lib/fileManager/FileManager.svelte';
	export let form;
	export let data;

	$: console.log(form);
</script>

<FileManager files={data.files} bind:form />
