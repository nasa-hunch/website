import { redirect, type Cookies } from "@sveltejs/kit"
import { prisma } from "./prismaConnection"


export const verifyProjectUser = async (cookies: Cookies, projectId: string) => {

	if(!cookies.get("session")) {
		throw redirect(303, "/login")
	}

	const userCheck = await prisma.session.findFirst({
		where: {
			sessionText: cookies.get("session")
		}
	})


}