export const Footer = () => {
	return (
		<div className='my-10'>
			<hr className='border-sky-100 mb-10 mx-10' />
			<div className='flex justify-center items-center my-10'>
				<p className='font-normal text-[14px] text-black opacity-50'>Thops Pro &copy; {new Date().getFullYear()} All rights reserved.</p>
			</div>
		</div>
	);
};
