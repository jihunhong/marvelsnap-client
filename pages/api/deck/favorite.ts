import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

// 인기 게시물
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const decks = await pb.collection('decks').getList(1, 6, {
    expand: 'items, writer',
    sort: '-created',
    page: req.query?.page || 1,
    perPage: 12,
  });

  res.status(200).json(decks);
}
