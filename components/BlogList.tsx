import Image from 'next/image';
import ClientSideRoute from './ClientSideRoute';
import { urlForImage } from '@sanity/lib/image';
// import { Counter } from './Counter';

type Props = {
	posts: Post[];
};

const BlogList = ({ posts }: Props) => {
	return (
		<div>
			<hr className='border-sky-100 mb-10 mx-10' />
			<div className='grid grid-cols-1 md:grid-cols-2   gap-10'>
				{posts.map((post) => (
					<ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
						<div className='flex flex-col group cursor-pointer'>
							<div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out mt-5'>
								<Image src={urlForImage(post.mainImage)} alt={post.author.name} className='object-cover lg:object-center blur-0' fill />
								<div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
									<div>
										<p className='font-bold'>{post.title}</p>
										<p className=''>
											{new Date(post._createdAt).toLocaleDateString('en-US', {
												day: 'numeric',
												month: 'long',
												year: 'numeric',
											})}
										</p>
									</div>
									<div>
										{post.categories.map((category) => (
											<div className='bg-sky-200 text-center text-black px-3 rounded-full text-sm font-semibold'>
												<p>{category.title}</p>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className='mt-8 flex-1 mx-10'>
								<p className='underline text-lg font-bold'>{post.title}</p>
								<p className='line-clamp-2 text-gray-500'>{post.description}</p>
							</div>
							<p className='mt-5 font-bold flex items-center group-hover:underline mx-10'>
								Read Post
								<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
									/>
								</svg>
							</p>
						</div>
					</ClientSideRoute>
				))}
			</div>
		</div>
	);
};

export default BlogList;
