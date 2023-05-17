const Banner = () => {
	return (
		<div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
			<div className='space-y-2'>
				<h1 className='text-7xl font-bold'>Thopz Daily Blogs</h1>
				<h2 className='mt-5 md:mt-0  font-light'>
					I hope that by reading my blog, you'll learn something new, be inspired, or simply be entertained.
				</h2>
			</div>

			{/* <p className='mt-5 md:mt-2 font-medium text-gray-400 max-w-sm '>I've been interested in technology for as long as I can remember.</p> */}
		</div>
	);
};

export default Banner;
