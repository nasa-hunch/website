<script>
	import FileManager from '$lib/fileManager/FileManager.svelte';
	export let form;
	export let data;
</script>

<FileManager bind:form files={data.files} />
