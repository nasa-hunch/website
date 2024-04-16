import { z } from 'zod';

import { Role } from '$lib/enums.js';
import { formHandler } from '$lib/server/bodyguard.js';
import { prisma } from '$lib/server/prisma/prismaConnection';
import { deleteFile } from '$lib/server/storage/deleteFile.js';
import { destinations } from '$lib/server/storage/fileTypes';
import { uploadFile } from '$lib/server/storage/uploadFile.js';
import { verifySession } from '$lib/server/verifySession.js';

export const load = async ({ parent }) => {
	const parentData = await parent();

	const templateFiles = await prisma.file.findMany({
		where: {
			templateFiles: {
				some: {
					templateId: parentData.projectTemplate.id
				}
			}
		}
	});

	return {
		templateFiles: templateFiles
	};
};

export const actions = {
	uploadFile: async ({ request, cookies, params }) => {
		const file = (await request.formData()).get('file') as File;

		const user = await verifySession(cookies);
		if (user.role != Role.HUNCH_ADMIN) {
			return {
				success: false,
				message: 'No permissions'
			};
		}

		const templateCheck = await prisma.projectTemplate.findFirst({
			where: {
				id: params.templateId
			}
		});
		if (!templateCheck) {
			return {
				success: false,
				message: 'Template not found'
			};
		}

		return await uploadFile(file, {
			destinationName: destinations.TEMPLATE,
			destinationId: templateCheck.id
		});
	},
	renameFile: formHandler(
		z.object({
			fileName: z.string(),
			fileId: z.string(),
			showFileExtension: z.coerce.boolean()
		}),
		async ({ fileName, fileId, showFileExtension }, { cookies, params }) => {
			const user = await verifySession(cookies);
			if (user.role != Role.HUNCH_ADMIN) {
				return {
					success: false,
					message: 'No permissions'
				};
			}

			const fileCheck = await prisma.file.findFirst({
				where: {
					AND: {
						id: fileId,
						templateFiles: {
							some: {
								templateId: params.templateId
							}
						}
					}
				}
			});

			if (!fileCheck) {
				return {
					success: false,
					message: 'No file found'
				};
			}

			const fileNameParts = fileCheck.name.split('.');
			const oldFileExtension =
				fileNameParts.length === 1 ? '' : fileNameParts[fileNameParts.length - 1];
			const newFileName = showFileExtension ? fileName : fileName + '.' + oldFileExtension;

			await prisma.file.update({
				where: {
					id: fileId
				},
				data: {
					name: newFileName
				}
			});

			return {
				success: true,
				message: 'File updated!'
			};
		}
	),
	deleteFile: formHandler(
		z.object({
			fileId: z.string()
		}),
		async ({ fileId }, { cookies, params }) => {
			const user = await verifySession(cookies);
			if (user.role != Role.HUNCH_ADMIN) {
				return {
					success: false,
					message: 'No permissions'
				};
			}

			return await deleteFile(fileId, {
				destinationName: destinations.TEMPLATE,
				destinationId: params.templateId
			});
		}
	)
};
