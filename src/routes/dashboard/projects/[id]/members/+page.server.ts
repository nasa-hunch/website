import { redirect } from '@sveltejs/kit';

import { Role } from '$lib/enums';
import { verifyProjectUser } from '$lib/verifyProjectUser.js';
import { verifySession } from '$lib/verifySession.js';

export const load = async ({ cookies, params }) => {
	const user = await verifySession(cookies);
	await verifyProjectUser(cookies, params.id);

	if (user.role != Role.TEACHER) {
		throw redirect(303, `/dashboard/projects/${params.id}`);
	}
};
