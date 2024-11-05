import { useQuery } from '@tanstack/react-query';

import { getUser } from './user';

export function useCurrent() {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['user'],
		queryFn: async () => {
			const user = await getUser();
			if (!user) throw new Error('User not found');
			return user;
		},
	});

	return {
		user: data,
		isLoading,
		isError,
	};
}
