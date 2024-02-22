import { PutObjectCommand } from "@aws-sdk/client-s3";
import crypto from "crypto"

import { bucket, mediaurl } from "$env/static/private";
import { ProjectUserPermission } from "$lib/enums.js";
import { prisma } from "$lib/prismaConnection";
import { S3 } from "$lib/s3.js";
import { verifySession } from "$lib/verifySession.js";

export const load = async ({parent}) => {

    const parentData = await parent();

    const files = await prisma.file.findMany({
        where: {
            projectId: parentData.project.id
        }
    })

    return {
        files
    }

}

export const actions = {
    uploadFile: async ({request, cookies, params}) => {

        const user = await verifySession(cookies)

        const projectUser = await prisma.projectUser.findFirst({
            where: {
                AND: {
                    userId: user.id,
                    projectId: parseInt(params.id)
                }
            }
        })

        console.log(projectUser)

        if(projectUser?.permission != ProjectUserPermission.EDITOR) {
            return {
                success: false,
                message: "No Permissions"
            }
        }

        const formData = await request.formData();
        const uploadFile: File = formData.get("file") as File;
        const key = crypto.randomBytes(32).toString("hex") + "/" + uploadFile.name

        if(uploadFile.size > 10e6) {
            return {
                success: false,
                message: "File too large."
            }
        }

        const fileBuffer = await uploadFile.arrayBuffer()

        if(!fileBuffer) {
            return {
                success: false,
                message: "No file sent."
            }
        }

        await S3.send(new PutObjectCommand({
            Bucket: bucket,
            Key: key,
            Body: new Uint8Array(fileBuffer)
        }))
        
        await prisma.file.create({
            data: {
                projectId: projectUser.projectId,
                name: uploadFile.name,
                link: `${mediaurl}/${key}`
            }
        })

        return {
            success: true,
            message: "File Uploaded"
        }
    }
}