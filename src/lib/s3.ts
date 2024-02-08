import { S3Client } from '@aws-sdk/client-s3';
import { r2endpoint, accessKeyId, accessKeySecret } from '$env/static/private';

console.log(r2endpoint);

export const S3 = new S3Client({
	region: 'auto',
	endpoint: r2endpoint,
	forcePathStyle: true,
	credentials: {
		accessKeyId: accessKeyId,
		secretAccessKey: accessKeySecret
	}
});
