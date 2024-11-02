import { useQuery } from '@tanstack/react-query';

export function useCurrent() {
	const { data, isLoading } = useQuery({
		queryKey: ['user'],
		queryFn: async () => {
			const user = await fetch('/api/current');
			return user.json();
		},
	});
	return {
		user: data,
		isLoading,
	};
}
