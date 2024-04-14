import { DeleteObjectCommand } from '@aws-sdk/client-s3';

import { bucket } from '$env/static/private';

import { prisma } from '../prisma/prismaConnection';
import { destinations, type FileDestination } from './fileTypes';
import { S3 } from './s3';

export const deleteFile = async (fileId: string, fileDestination: FileDestination) => {
	let fileCheck;
	if (fileDestination.destinationName == destinations.TEMPLATE) {
		fileCheck = await prisma.file.findFirst({
			where: {
				AND: {
					id: fileId,
					templateFiles: {
						some: {
							templateId: fileDestination.destinationId
						}
					}
				}
			}
		});
	} else if (fileDestination.destinationName == destinations.PROJECT) {
		fileCheck = await prisma.file.findFirst({
			where: {
				AND: {
					id: fileId,
					projectFiles: {
						some: {
							projectId: fileDestination.destinationId
						}
					}
				}
			}
		});
	} else {
		return {
			success: false,
			message: 'Something went wrong'
		};
	}

	if (!fileCheck) {
		return {
			success: false,
			message: 'No file'
		};
	}

	//If there is no key, we assume there is no s3 upload

	if (fileCheck.key) {
		await S3.send(
			new DeleteObjectCommand({
				Bucket: bucket,
				Key: fileCheck.key
			})
		);
	}

	await prisma.file.delete({
		where: {
			id: fileCheck.id
		}
	});

	return {
		success: true,
		message: 'File deleted'
	};
};
