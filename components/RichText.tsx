import { urlForImage } from '@sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

export const RichText = {
	types: {
		image: ({ value }: any) => (
			<div>
				<Image src={urlForImage(value)} alt='blog' fill />,
			</div>
		),
	},

	list: {
		bullet: ({ children }: any) => <ul className='ml-10 py-5 list-disc space-y-5 '>{children}</ul>,
		number: ({ children }: any) => <ul className='mt-lg list-decimal '>{children}</ul>,
	},
	block: {
		h1: ({ children }: any) => <h1 className='text-5xl py-10 font-bold'>{children}</h1>,
		h2: ({ children }: any) => <h2 className='text-4xl py-10 font-bold'>{children}</h2>,
		h3: ({ children }: any) => <h3 className='text-3xl py-10 font-bold'>{children}</h3>,
		h4: ({ children }: any) => <h4 className='text-2xl py-10 font-bold'>{children}</h4>,
		blockquote: ({ children }: any) => <blockquote className='border-l-sky-500 border-l-4 pl-5 py-5 my-5'>{children}</blockquote>,
	},
	marks: {
		link: ({ children, value }: any) => {
			const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
			return (
				<Link href={value.ref} rel={rel} className='underline decoration-sky-500 hover:decoration-black'>
					{children}
				</Link>
			);
		},
	},
};
