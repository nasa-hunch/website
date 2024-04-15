import type { ComponentType } from 'svelte';

import IconFile from '~icons/mdi/file';
import IconImage from '~icons/vscode-icons/file-type-image';
import HtmlIcon from '~icons/vscode-icons/file-type-html';
import JsIcon from '~icons/vscode-icons/file-type-js-official';
import CssIcon from '~icons/vscode-icons/file-type-css';
import VideoIcon from '~icons/vscode-icons/file-type-video';
import PdfIcon from '~icons/vscode-icons/file-type-pdf2';
import MarkdownIcon from "~icons/vscode-icons/file-type-markdown";
import ExcelIcon from "~icons/vscode-icons/file-type-excel2";
import WordIcon from "~icons/vscode-icons/file-type-word2";
import PowerPointIcon from "~icons/vscode-icons/file-type-powerpoint2";
import ThreeDimensionIcon from "~icons/mdi/video-3d";
import BlenderIcon from "~icons/mdi/blender-software"

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
	"3ds": ThreeDimensionIcon,
	BLEND: BlenderIcon,
};

export const createDisplayInformation = (fileName: string, showExtension: boolean) => {
	
	const fileParts = fileName.split(".");
	const extension = fileParts[fileParts.length - 1].toLowerCase()
	const newFileName =  showExtension ? fileName : fileParts.toSpliced(fileParts.length - 1, 1).join(".");
	


	return {
		fileName: newFileName,
		extensionIcon: extensionIcons[extension] || (IconFile as ComponentType)
	}
}
