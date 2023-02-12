import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const article = await pb.collection('articles').getFirstListItem(`id="${req.query.id}"`);
  res.status(200).json(article);
}
