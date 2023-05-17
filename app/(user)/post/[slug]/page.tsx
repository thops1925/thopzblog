import { client } from '@sanity/lib/client';
import { postQuery } from '@utils/queries';

type Props = {
	params: {
		slug: string;
	};
};

// const postQuery = groq`*[_type == 'post' && slug.current == $slug][0]{
//     ...,
//     author->,
//     categories[]->
// }`;

const Post = async ({ params: { slug } }: Props) => {
	const view = await client.fetch(postQuery(slug));
	// console.log(view);
	return (
		<div>
			<p></p>
		</div>
	);
};

export default Post;
