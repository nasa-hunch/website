import type { ComponentType } from 'svelte';

import BlenderIcon from '~icons/mdi/blender-software';
import IconFile from '~icons/mdi/file';
import ThreeDimensionIcon from '~icons/mdi/video-3d';
import AudioIcon from '~icons/vscode-icons/file-type-audio';
import CssIcon from '~icons/vscode-icons/file-type-css';
import ExcelIcon from '~icons/vscode-icons/file-type-excel2';
import HtmlIcon from '~icons/vscode-icons/file-type-html';
import IconImage from '~icons/vscode-icons/file-type-image';
import JsIcon from '~icons/vscode-icons/file-type-js-official';
import JsonIcon from '~icons/vscode-icons/file-type-json';
import MarkdownIcon from '~icons/vscode-icons/file-type-markdown';
import PdfIcon from '~icons/vscode-icons/file-type-pdf2';
import PowerPointIcon from '~icons/vscode-icons/file-type-powerpoint2';
import VideoIcon from '~icons/vscode-icons/file-type-video';
import WordIcon from '~icons/vscode-icons/file-type-word2';
import ZipIcon from '~icons/vscode-icons/file-type-zip';

const extensionIcons: { [key: string]: ComponentType } = {
	png: IconImage,
	jpg: IconImage,
	jpeg: IconImage,
	svg: IconImage,
	webp: IconImage,
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
	xlsx: ExcelIcon,
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
	stl: ThreeDimensionIcon,
	'3ds': ThreeDimensionIcon,
	blend: BlenderIcon,
	zip: ZipIcon,
	ogg: AudioIcon,
	wav: AudioIcon,
	mp3: AudioIcon,
	amr: AudioIcon,
	acc: AudioIcon,
	json: JsonIcon,
	jsonc: JsonIcon
};

export const createDisplayInformation = (fileName: string, showExtension: boolean) => {
	const fileParts = fileName.split('.');
	const extension = fileParts[fileParts.length - 1].toLowerCase();
	fileParts.splice(fileParts.length - 1, 1)
	const newFileName = showExtension
		? fileName
		: fileParts.join('.');

	return {
		fileName: newFileName,
		extensionIcon: extensionIcons[extension] || (IconFile as ComponentType)
	};
};
