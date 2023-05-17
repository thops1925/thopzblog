'use client';
import { urlForImage } from '@sanity/lib/image';
import Image from 'next/image';

type Props = {
	posts: Post[];
};

const BlogList = ({ posts }: Props) => {
	return (
		<div>
			<hr className='border-sky-100 mb-10' />
			<div>
				{posts.map((post) => (
					<div key={post._id} className='flex flex-col group cursor-pointer'>
						<div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
							<Image src={urlForImage(post.mainImage).url()} alt={post.author.name} className='object-cover object-left lg:object-center' fill />
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
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogList;
