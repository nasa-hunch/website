import { PutObjectCommand } from '@aws-sdk/client-s3';
import crypto from 'crypto';

import { bucket, mediaurl } from '$env/static/private';
import { prisma } from '$lib/prismaConnection';
import { S3 } from '$lib/s3.js';

export const uploadFile = async (request: Request, projectId: number) => {
	const formData = await request.formData();
	const uploadFile: File = formData.get('file') as File;
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

	await prisma.file.create({
		data: {
			projectId: projectId,
			name: uploadFile.name,
			key: key,
			link: `${mediaurl}/${key}`,
			size: uploadFile.size
		}
	});

	return {
		success: true,
		message: 'File Uploaded'
	};
};
