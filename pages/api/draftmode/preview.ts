import { NextApiRequest, NextApiResponse } from 'next';
import { draftMode } from 'next/dist/client/components/headers';

export default function preview(req: NextApiRequest, res: NextApiResponse) {
	res.setPreviewData({});
	res.writeHead(307, { Location: '/' });
	res.end();
}
