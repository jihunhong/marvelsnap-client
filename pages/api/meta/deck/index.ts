import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const record = await pb.collection('meta_deck').getFirstListItem(`id='${req.query.id}'`, {
    expand: 'items',
  });
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=3600');
  res.status(200).json(record);
}
