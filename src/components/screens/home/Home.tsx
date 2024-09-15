export function Home() {
	return (
		<main className="container mx-auto h-min bg-green-600">
			<section className="flex h-[50vh] items-center justify-center bg-[var(--section)] px-6 pt-20">
				<h1>First section</h1>
			</section>
			<section className="flex h-[calc((100vh-160px)/2)] items-center justify-center bg-purple-300 px-6">
				<h1>Second section</h1>
			</section>
		</main>
	);
}
