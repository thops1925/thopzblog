import { client } from '@sanity/lib/client';
import { postQuery } from '@utils/queries';

type Props = {
	params: {
		slug: string;
	};
};

const Post = async ({ params: { slug } }: Props) => {
	const postSlug = await client.fetch(postQuery(slug));
	console.log(postSlug);
	return (
		<div>
			<p>{}</p>
		</div>
	);
};

export default Post;
