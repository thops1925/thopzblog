import '@styles/globals.css';
import Header from '@components/Header';
import Banner from '@components/Banner';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html>
			<body className=''>
				<Header />
				<Banner />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
