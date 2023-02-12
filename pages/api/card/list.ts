import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const cards = await pb.collection('cards').getFullList(300, {
    expand: 'keywords.name',
    sort: '+cost,+power,+en',
    filter: 'grade!=0',
  });
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=60');
  res.status(200).json(cards);
}
