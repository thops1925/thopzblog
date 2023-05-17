import { client } from '@sanity/lib/client';
import { author } from '@utils/queries';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const getAllQuery = await client.fetch(author());
		res.status(200).json(getAllQuery);
	}
}
