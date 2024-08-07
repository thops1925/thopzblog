import '@styles/globals.css';
import Header from '@components/Header';
import Banner from '@components/Banner';
import { Footer } from '@components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Thopz Daily',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html>
			<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8026256044128799"
     crossorigin="anonymous"></script>
			<body className='max-w-7xl mx-auto'>
				<Header />
				<Banner />
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
