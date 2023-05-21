import Image from 'next/image';
import logo from '../public/thops3.png';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='flex items-center justify-between space-x-2 font-bold'>
			<div className='flex items-center space-x-2'>
				<Link href='/'>
					<Image src={logo} alt='logo' className='rounded-full object-contain h-14 w-24 lg:h-20 lg:w-24 blur-0' />
				</Link>
				<h1></h1>
			</div>

			<div>
				<Link
					href='https://christopherlumenportfolio.vercel.app'
					className='px-4 py-2 text-sm md:text-base bg-sky-100 text-sky-500 flex items-center rounded-full text-center'>
					Check out my Portfolio
				</Link>
			</div>
		</header>
	);
};

export default Header;
