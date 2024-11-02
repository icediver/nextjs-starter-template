import { Home } from '@/components/screens/home/Home';

import { getUser } from '@/lib/data/user';

export default async function HomePage() {
	const user = await getUser();

	console.log(user);

	return <Home />;
}
