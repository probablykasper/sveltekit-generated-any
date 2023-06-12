import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.getSession = async () => {
		return { id: 'example' };
	};

	return resolve(event);
};
