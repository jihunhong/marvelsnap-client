import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

type Data = {
  name: string
}

const pb = new PocketBase('http://127.0.0.1:8090');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const cards = await pb.collection('cards').getFullList(300, {
        expand: 'keywords.name',
        sort: '+cost,+power,+en',
        filter: "grade!=0"
    });
    console.log(cards);
    res.status(200).json(cards)
}
