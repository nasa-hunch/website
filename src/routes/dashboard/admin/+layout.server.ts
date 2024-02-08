import { Role } from '$lib/enums';
import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	const parentData = await parent();
	if (parentData.user.role != Role.HUNCH_ADMIN) {
		redirect(303, '/dashboard');
	}
};
