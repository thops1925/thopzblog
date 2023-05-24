// // pages/api/view-counter.js
// import { createClient } from '@sanity/client';
// import { NextApiRequest, NextApiResponse } from 'next';

// const sanityClient = createClient({
// 	projectId: 'your-project-id',
// 	dataset: 'your-dataset-name',
// 	useCdn: false, // Set to true if you want to use the CDN
// });

// export default async function handler(req:NextApiRequest, res:NextApiResponse) {
// 	if (req.method === 'POST') {
// 		const { id } = req.body;

// 		try {
// 			const doc = await sanityClient.patch(id).inc({ views: 1 }).commit();
// 			res.status(200).json({ views: doc.views });
// 		} catch (error) {
// 			console.error('Error updating view count:', error);
// 			res.status(500).json({ message: 'Error updating view count' });
// 		}
// 	} else {
// 		res.status(405).json({ message: 'Method Not Allowed' });
// 	// }
// }
