<script lang="ts">
	import FileManager from '$lib/fileManager/FileManager.svelte';
	export let form;
	export let data;
</script>

<FileManager files={data.templateFiles} bind:form />
