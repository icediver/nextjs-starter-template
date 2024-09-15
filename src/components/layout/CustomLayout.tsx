import { Footer } from './footer/Footer';
import { Header } from './header/Header';

export function CustomLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="container mx-auto flex min-h-screen flex-col justify-between">
			<Header />
			{children}
			<Footer />
		</div>
	);
}
