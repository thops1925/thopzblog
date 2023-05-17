import { client } from '@sanity/lib/client';
import { author } from '@utils/queries';
import { draftMode } from 'next/dist/client/components/headers';

const Home = async () => {
	// if (draftMode()) return <div>daftmode is active</div>;

	const post = await client.fetch(author());
	return (
		<div>
			<h1>My Blog Post</h1>
			{/* <p>Draft Mode is currently {isEnabled ? 'Enabled' : 'Disabled'}</p> */}
		</div>
	);
};

export default Home;
