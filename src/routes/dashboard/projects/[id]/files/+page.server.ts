import { DeleteObjectCommand } from '@aws-sdk/client-s3';
import { z } from 'zod';

import { bucket } from '$env/static/private';
import { ProjectUserPermission } from '$lib/enums.js';
import { formHandler } from '$lib/server/bodyguard.js';
import { prisma } from '$lib/server/prisma/prismaConnection';
import { destinations } from '$lib/server/storage/fileTypes';
import { S3 } from '$lib/server/storage/s3.js';
import { uploadFile } from '$lib/server/storage/uploadFile.js';
import { verifySession } from '$lib/server/verifySession.js';

export const load = async ({ parent }) => {
	const parentData = await parent();

	const files = await prisma.file.findMany({
		where: {
			projectFiles: {
				some: {
					projectId: parentData.project.id
				}
			}
		}
	});

	const templateFiles = await prisma.file.findMany({
		where: {
			templateFiles: {
				some: {
					templateId: parentData.project.projectTemplateId
				}
			}
		}
	});

	const lockedFiles = templateFiles.map((item) => ({ ...item, locked: true }));

	return {
		files: [...files, ...lockedFiles]
	};
};

export const actions = {
	uploadFile: async ({ request, cookies, params }) => {
		const file = (await request.formData()).get('file'); // If your machine is too fast, this stops the request from hanging.
		const user = await verifySession(cookies);
		const projectId = params.id;

		const projectUser = await prisma.projectUser.findFirst({
			where: {
				AND: {
					userId: user.id,
					projectId: projectId
				}
			}
		});

		if (projectUser?.permission != ProjectUserPermission.EDITOR && user.role != 'HUNCH_ADMIN') {
			return {
				success: false,
				message: 'No permissions'
			};
		} else {
			return await uploadFile(file as File, {
				destinationName: destinations.PROJECT,
				destinationId: projectId
			});
		}
	},
	deleteFile: formHandler(
		z.object({
			fileId: z.string()
		}),
		async ({ fileId }, { cookies, params }) => {
			const user = await verifySession(cookies);
			const projectUser = await prisma.projectUser.findFirst({
				where: {
					AND: {
						projectId: params.id,
						userId: user.id
					}
				}
			});

			if (projectUser?.permission != ProjectUserPermission.EDITOR) {
				return {
					success: false,
					message: 'No Permissions'
				};
			}

			const fileCheck = await prisma.file.findFirst({
				where: {
					AND: {
						id: fileId,
						projectFiles: {
							some: {
								projectId: projectUser.projectId
							}
						}
					}
				}
			});

			if (!fileCheck) {
				return {
					success: false,
					message: 'No file exists'
				};
			}

			await prisma.file.delete({
				where: {
					id: fileId
				}
			});

			// If we don't have a key, we can assume the file is not in s3
			if (!fileCheck.key) {
				return {
					success: true,
					message: 'File Deleted!'
				};
			}

			// However, if we DO have a key, the file is in s3 and we need to get rid of it.
			await S3.send(
				new DeleteObjectCommand({
					Bucket: bucket,
					Key: fileCheck.key
				})
			);

			return {
				success: true,
				message: 'File Deleted!'
			};
		}
	),
	renameFile: formHandler(
		z.object({
			fileId: z.string(),
			fileName: z.string(),
			showFileExtension: z.coerce.boolean()
		}),
		async ({ fileId, fileName, showFileExtension }, { cookies, params }) => {
			const user = await verifySession(cookies);

			const projectUser = await prisma.projectUser.findFirst({
				where: {
					AND: {
						projectId: params.id,
						userId: user.id
					}
				}
			});

			if (projectUser?.permission != ProjectUserPermission.EDITOR) {
				return {
					success: false,
					message: 'No Permissions'
				};
			}

			const fileCheck = await prisma.file.findFirst({
				where: {
					AND: {
						id: fileId,
						projectFiles: {
							some: {
								projectId: projectUser.projectId
							}
						}
					}
				}
			});

			if (!fileCheck) {
				return {
					success: false,
					message: 'No file exists'
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
				message: 'File Updated'
			};
		}
	)
};
