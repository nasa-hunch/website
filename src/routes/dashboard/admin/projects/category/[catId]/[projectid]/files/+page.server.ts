import { prisma } from "$lib/server/prisma/prismaConnection";

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
	uploadFile: async ({request}) => {
		await request.formData()
		console.log("Upload called")
		return {
			success: true,
			message: "File uploaded"
		}
	}
}