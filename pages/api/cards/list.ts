import PocketBase, { Record } from 'pocketbase';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

interface Card extends Record {
    name: string;
    power: number;
    cost: number;
}

const pb = new PocketBase('http://127.0.0.1:8090');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const cards = await pb.collection('cards').getFullList(300, {
        expand: 'keywords',
    });

  res.status(200).json(cards)
}
