import { client } from '@sanity/lib/client';
import { urlForImage } from '@sanity/lib/image';
import { postQuery, staticQuery } from '@utils/queries';
import Image from 'next/image';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, PromiseLikeOfReactNode } from 'react';
import { PortableText } from '@portabletext/react';
import { RichText } from '@components/RichText';

type Props = {
	params: {
		slug: string;
	};
};

// export const revalidate = 10; // revalidate this page every 60 seconds

export async function generateStaticParams() {
	const posts: Post[] = await client.fetch(staticQuery(), {
		next: { revalidate: 10 },
	});
	const slugRoutes = posts.map((slug) => slug.slug.current);
	return slugRoutes.map((slug) => ({
		slug,
	}));
}

const Post = async ({ params: { slug } }: Props) => {
	const post = await client.fetch(postQuery(slug));
	return (
		<article className='mx-2'>
			<section className='space-2 border border-sky-500 text-white'>
				<div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
					<div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
						<Image
							src={urlForImage(post.mainImage)}
							alt={post.author.name}
							className='object-cover lg:object-center mx-auto'
							fill
							// height={300}
							// width={300}
						/>
					</div>
					<section className='p-5 bg-sky-500 w-full'>
						<div className='flex flex-col md:flex-row justify-between'>
							<div>
								<h1 className='text-4xl font-extrabold'>{post.title}</h1>
								<p>
									{new Date(post._createdAt).toLocaleDateString('en-US', {
										day: 'numeric',
										month: 'long',
										year: 'numeric',
									})}
								</p>
							</div>
							<div className='flex items-center space-x-2'>
								<Image
									src={urlForImage(post.author.image)}
									alt={post.author.name}
									className='rounded-full blur-0 object-cover'
									height={40}
									width={40}
								/>
								<div className='w-64'>
									<h3 className='text-lg font-bold'>{post.author.name}</h3>
									<div></div>
								</div>
							</div>
						</div>
						<div>
							<h2 className='italic pt-10'>{post.description}</h2>
							<div className='flex items-center justify-end mt-auto space-x-2'>
								{post.categories.map(
									(category: {
										_id: Key | null | undefined;
										title:
											| string
											| number
											| boolean
											| ReactElement<any, string | JSXElementConstructor<any>>
											| ReactFragment
											| ReactPortal
											| PromiseLikeOfReactNode
											| null
											| undefined;
									}) => (
										<p key={category._id} className='bg-sky-700 text-white px-3 py-3 rounded-full text-sm font-semibold'>
											{category.title}
										</p>
									),
								)}
							</div>
						</div>
					</section>
				</div>
			</section>
			<PortableText value={post.body} components={RichText} />
		</article>
	);
};

export default Post;
