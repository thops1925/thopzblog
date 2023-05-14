import { Metadata } from 'next';
import '@styles/globals.css';

export const metadata: Metadata = {
	title: 'blog',
	description: 'my path to the web dev',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html>
			<head />
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
