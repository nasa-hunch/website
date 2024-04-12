import { PutObjectCommand } from '@aws-sdk/client-s3';
import crypto from 'crypto';

import { bucket, mediaurl } from '$env/static/private';
import { prisma } from '$lib/server/prisma/prismaConnection';
import { S3 } from '$lib/server/storage/s3.js';

import type { FileDestination } from './fileTypes';
import { destinations } from './fileTypes';

//Destination information SHOULD already be checked elsewhere, therefore it will not be validated a second time here.
export const uploadFile = async (uploadFile: File, destinationDetails?: FileDestination) => {
	if (!uploadFile) {
		return {
			success: false,
			message: 'No file present'
		};
	}
	const key = crypto.randomBytes(32).toString('hex') + '/' + uploadFile.name;

	if (uploadFile.size > 10e6) {
		return {
			success: false,
			message: 'File too large.'
		};
	}

	const fileBuffer = await uploadFile.arrayBuffer();

	if (!fileBuffer) {
		return {
			success: false,
			message: 'No file sent.'
		};
	}

	await S3.send(
		new PutObjectCommand({
			Bucket: bucket,
			Key: key,
			Body: new Uint8Array(fileBuffer)
		})
	);

	const file = await prisma.file.create({
		data: {
			name: uploadFile.name,
			key: key,
			link: `${mediaurl}/${key}`,
			size: uploadFile.size
		}
	});

	if (destinationDetails)
		if (destinationDetails.destinationName == destinations.PROJECT) {
			await prisma.projectFile.create({
				data: {
					fileId: file.id,
					projectId: destinationDetails.destinationId
				}
			});
		} else if (destinationDetails.destinationName == destinations.TEMPLATE) {
			await prisma.projectTemplateFile.create({
				data: {
					fileId: file.id,
					templateId: destinationDetails.destinationId
				}
			});
		}

	return {
		success: true,
		message: 'File Uploaded',
		key,
		link: `${mediaurl}/${key}`
	};
};
