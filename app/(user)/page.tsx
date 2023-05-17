import { client } from '@sanity/lib/client';
import { author } from '@utils/queries';

const Home = async () => {
	const post = await client.fetch(author());
	console.log(post);
	return (
		<main>
			<h1>My Blog Post</h1>
		</main>
	);
};

export default Home;
