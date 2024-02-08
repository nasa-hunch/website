import { redirect } from '@sveltejs/kit';

import { Role } from '$lib/enums';

export const load = async ({ parent }) => {
	const parentData = await parent();
	if (parentData.user.role != Role.HUNCH_ADMIN) {
		redirect(303, '/dashboard');
	}
};
