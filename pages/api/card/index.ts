import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';
import cards from './cardlist-demo.json';

const pb = new PocketBase(process.env.END_POINT);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // const record = await pb.collection('cards').getFirstListItem(`cardDefId='${req.query.cardDefId}'`, {
  //   expand: 'variants',
  // });
  const record = cards.find(c => c.cardDefId === req.query.cardDefId);
  res.status(200).json(record);
}
