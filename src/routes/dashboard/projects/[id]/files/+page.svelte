<script>
	import FileManager from '$lib/fileManager/FileManager.svelte';
	export let form;
	export let data;

	$: console.log(form)
</script>

<FileManager bind:form files={data.files} />
