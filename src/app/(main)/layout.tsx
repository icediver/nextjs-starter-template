import { CustomLayout } from '@/components/layout/CustomLayout';

export default async function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <CustomLayout>{children}</CustomLayout>;
}
