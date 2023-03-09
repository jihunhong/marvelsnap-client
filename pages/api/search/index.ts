import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const record = await pb.collection('cards').getFullList(5, {
    filter: `name ~ '%${req.query.q}%' && grade != 0`,
  });
  res?.setHeader('Cache-Control', 'public, s-maxage=31536000, max-age=0, stale-while-revalidate=59');
  res.status(200).json(record);
}
