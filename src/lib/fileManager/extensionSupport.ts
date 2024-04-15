import type { ComponentType } from 'svelte';

import BlenderIcon from '~icons/mdi/blender-software';
import IconFile from '~icons/mdi/file';
import ThreeDimensionIcon from '~icons/mdi/video-3d';
import CssIcon from '~icons/vscode-icons/file-type-css';
import ExcelIcon from '~icons/vscode-icons/file-type-excel2';
import HtmlIcon from '~icons/vscode-icons/file-type-html';
import IconImage from '~icons/vscode-icons/file-type-image';
import JsIcon from '~icons/vscode-icons/file-type-js-official';
import MarkdownIcon from '~icons/vscode-icons/file-type-markdown';
import PdfIcon from '~icons/vscode-icons/file-type-pdf2';
import PowerPointIcon from '~icons/vscode-icons/file-type-powerpoint2';
import VideoIcon from '~icons/vscode-icons/file-type-video';
import WordIcon from '~icons/vscode-icons/file-type-word2';

const extensionIcons: { [key: string]: ComponentType } = {
	png: IconImage,
	jpg: IconImage,
	jpeg: IconImage,
	svg: IconImage,
	html: HtmlIcon,
	js: JsIcon,
	css: CssIcon,
	mp4: VideoIcon,
	webm: VideoIcon,
	abi: VideoIcon,
	mov: VideoIcon,
	pdf: PdfIcon,
	md: MarkdownIcon,
	xls: ExcelIcon,
	xlsm: ExcelIcon,
	xlsb: ExcelIcon,
	xltx: ExcelIcon,
	xltm: ExcelIcon,
	ods: ExcelIcon,
	csv: ExcelIcon,
	doc: WordIcon,
	docm: WordIcon,
	docx: WordIcon,
	dotx: WordIcon,
	pptx: PowerPointIcon,
	ppt: PowerPointIcon,
	pptm: PowerPointIcon,
	odp: PowerPointIcon,
	obj: ThreeDimensionIcon,
	fbx: ThreeDimensionIcon,
	'3ds': ThreeDimensionIcon,
	BLEND: BlenderIcon
};

export const createDisplayInformation = (fileName: string, showExtension: boolean) => {
	const fileParts = fileName.split('.');
	const extension = fileParts[fileParts.length - 1].toLowerCase();
	const newFileName = showExtension
		? fileName
		: fileParts.toSpliced(fileParts.length - 1, 1).join('.');

	return {
		fileName: newFileName,
		extensionIcon: extensionIcons[extension] || (IconFile as ComponentType)
	};
};
