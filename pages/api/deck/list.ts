import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

type Data = {
  name: string;
};

const pb = new PocketBase('http://127.0.0.1:8090');

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const decks = await pb.collection('decks').getList(1, 30, {
    expand: 'items',
    sort: '-created',
    page: req.query?.page || 1,
    perPage: 12,
  });

  res.status(200).json(decks);
}
