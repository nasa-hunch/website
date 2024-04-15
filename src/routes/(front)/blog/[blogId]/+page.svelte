<script lang="ts">
    import sanitizeHtml from 'sanitize-html';

    export let data;
</script>

<article>
    <h1>{data.post.title}</h1>
    <p>{@html sanitizeHtml(data.post.content)}</p>
</article>

<style lang="scss">
    article {
        margin: 1rem;
    }
</style>
