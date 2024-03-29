import { redirect } from '@sveltejs/kit';

export const actions = {
	default: ({ cookies }) => {
		cookies.delete('session', {
			path: '/'
		});

		redirect(303, '/login');
	}
};
