import BlogList from '@components/BlogList';
import { client } from '@sanity/lib/client';
import { author } from '@utils/queries';

export const revalidate = 10; // revalidate this page every 60 seconds

const Home = async () => {
	const posts = await client.fetch(author());

	return (
		<main>
			<BlogList posts={posts} />
		</main>
	);
};

export default Home;
