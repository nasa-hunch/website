import { redirect } from '@sveltejs/kit';

export let load = async ({ parent }) => {
	let parentData = await parent();
	if (parentData.user.role != 0) {
		throw redirect(303, '/dashboard');
	}
};
