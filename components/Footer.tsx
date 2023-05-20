export const Footer = () => {
	return (
		<div className='flex justify-center items-center sm:py-16 py-6'>
			<hr className='mx-10 border-black ' />
			<div className=''>
				<p className='font-normal text-[14px] text-black opacity-50'>Thops Prod Copyright &copy; {new Date().getFullYear()} All rights reserved.</p>
			</div>
		</div>
	);
};
