import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);
const perPage = 12;

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const decks = await pb.collection('meta_deck').getList(req.query.page, perPage, {
    sort: '-created',
    expand: 'items',
  });
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60');
  res.status(200).json(decks);
}
