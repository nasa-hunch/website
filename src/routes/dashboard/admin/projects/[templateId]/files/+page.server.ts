import { z } from "zod";

import { Role } from "$lib/enums.js";
import { formHandler } from "$lib/server/bodyguard.js";
import { prisma } from "$lib/server/prisma/prismaConnection";
import { destinations, uploadFile } from "$lib/server/storage/uploadFile.js";
import { verifySession } from "$lib/server/verifySession.js";

export const load = async ({parent}) => {
	const parentData = await parent();

	const templateFiles = await prisma.file.findMany({
		where: {
			templateFiles: {
				some: {
					templateId: parentData.projectTemplate.id
				}
			}
		}
	})

	return {
		templateFiles: templateFiles
	}
}

export const actions = {
	uploadFile: async ({request, cookies, params}) => {
		const file = (await request.formData()).get("file") as File

		const user = await verifySession(cookies)
		if(user.role != Role.HUNCH_ADMIN) {
			return {
				success: false,
				message: "No permissions"
			}
		}

		const templateCheck = await prisma.projectTemplate.findFirst({
			where: {
				id: parseInt(params.templateId)
			}
		})
		if(!templateCheck) {
			return {
				success: false,
				message: "Template not found"
			}
		}

		return await uploadFile(file, {
			destinationName: destinations.TEMPLATE,
			destinationId: templateCheck.id
		})
	
	},
	renameFile: formHandler(z.object({
		fileName: z.string(),
		fileId: z.coerce.number()
	}), async ({fileName, fileId}, {cookies, params}) => {
		const user = await verifySession(cookies)
		if(user.role != Role.HUNCH_ADMIN) {
			return {
				success: false,
				message: "No permissions"
			}
		}

		const fileCheck = await prisma.file.findFirst({
			where: {
				AND: {
					id: fileId,
					templateFiles: {
						some: {
							templateId: parseInt(params.templateId)
						}
					}
				}
			}
		})

		if(!fileCheck) {
			return {
				success: false,
				message: "No file found"
			}
		}

		await prisma.file.update({
			where: {
				id: fileId
			},
			data: {
				name: fileName
			}
		})

		return {
			success: true,
			message: "File updated!"
		}

		
	})
}