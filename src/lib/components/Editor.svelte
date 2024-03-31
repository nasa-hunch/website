<script lang="ts">
    import { onMount, onDestroy } from 'svelte'
    import { Editor } from '@tiptap/core' 

    import ExtensionBlockquote from "@tiptap/extension-blockquote";
    import ExtensionBold from "@tiptap/extension-bold";
    import ExtensionBulletList from "@tiptap/extension-bullet-list";
    import ExtensionCode from "@tiptap/extension-code";
    import ExtensionCodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
    import ExtensionColor from "@tiptap/extension-color";
    import ExtensionDocument from "@tiptap/extension-document";
    import ExtensionDropcursor from "@tiptap/extension-dropcursor";
    import ExtensionFocus from "@tiptap/extension-focus";
    import ExtensionFontFamily from "@tiptap/extension-font-family";
    import ExtensionGapcursor from "@tiptap/extension-gapcursor";
    import ExtensionHardBreak from "@tiptap/extension-hard-break";
    import ExtensionHeading from "@tiptap/extension-heading";
    import ExtensionHighlight from "@tiptap/extension-highlight";
    import ExtensionHistory from "@tiptap/extension-history";
    import ExtensionHorizontalRule from "@tiptap/extension-horizontal-rule";
    import ExtensionImage from "@tiptap/extension-image";
    import ExtensionItalic from "@tiptap/extension-italic";
    import ExtensionLink from "@tiptap/extension-link";
    import ExtensionListItem from "@tiptap/extension-list-item";
    import ExtensionOrderedList from "@tiptap/extension-ordered-list";
    import ExtensionParagraph from "@tiptap/extension-paragraph";
    import ExtensionPlaceholder from "@tiptap/extension-placeholder";
    import ExtensionStrike from "@tiptap/extension-strike";
    import ExtensionSubscript from "@tiptap/extension-subscript";
    import ExtensionSuperscript from "@tiptap/extension-superscript";
    import ExtensionTable from "@tiptap/extension-table";
    import ExtensionTableCell from "@tiptap/extension-table-cell";
    import ExtensionTableHeader from "@tiptap/extension-table-header";
    import ExtensionTableRow from "@tiptap/extension-table-row";
    import ExtensionTaskItem from "@tiptap/extension-task-item";
    import ExtensionTaskList from "@tiptap/extension-task-list";
    import ExtensionText from "@tiptap/extension-text";
    import ExtensionTextAlign from "@tiptap/extension-text-align";
    import ExtensionTextStyle from "@tiptap/extension-text-style";
    import ExtensionTypography from "@tiptap/extension-typography";
    import ExtensionUnderline from "@tiptap/extension-underline";
    import { createLowlight, common } from 'lowlight'

    let element: HTMLDivElement;
    let editor: Editor;

    export let content = '';
    export let placeholder: string;
    export let name: string;

    export let editable = true

    $: if (editor) editor.setEditable(editable);

    onMount(() => {
        const lowlight = createLowlight(common)

        editor = new Editor({
            editable,
            element,
            content,
            extensions: [
                ExtensionBlockquote,
                ExtensionBold,
                ExtensionBulletList,
                ExtensionCode,
                ExtensionCodeBlockLowlight.configure({
                    lowlight
                }),
                ExtensionColor,
                ExtensionDocument,
                ExtensionDropcursor,
                ExtensionFocus,
                ExtensionFontFamily,
                ExtensionGapcursor,
                ExtensionHardBreak,
                ExtensionHeading,
                ExtensionHighlight,
                ExtensionHistory,
                ExtensionHorizontalRule,
                ExtensionImage,
                ExtensionItalic,
                ExtensionLink,
                ExtensionListItem,
                ExtensionOrderedList,
                ExtensionParagraph,
                ExtensionPlaceholder.configure({
                    placeholder
                }),
                ExtensionStrike,
                ExtensionSubscript,
                ExtensionSuperscript,
                ExtensionTable,
                ExtensionTableCell,
                ExtensionTableHeader,
                ExtensionTableRow,
                ExtensionTaskItem,
                ExtensionTaskList,
                ExtensionText,
                ExtensionTextAlign,
                ExtensionTextStyle,
                ExtensionTypography,
                ExtensionUnderline
            ],
            onTransaction() {
                editor = editor;
                content = editor.getHTML();
            }
        })
    });

    onDestroy(() => {
        editor?.destroy();
    });
</script>

{#if name}
    <input hidden type="text" name={name} value={content} />
{/if}

<p>{content}</p>

<div bind:this={element}></div>

<style lang="scss">
    :global(.tiptap) {
        border: 2px solid black;
        border-radius: 5px;
        padding: 10px;

        :global(p.is-editor-empty:first-child::before) {
            color: #adb5bd;
            content: attr(data-placeholder);
            float: left;
            height: 0;
            pointer-events: none;
        }
    }
</style>
