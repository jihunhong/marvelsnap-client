import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';
import cards from '../card/cardlist-demo.json';

const pb = new PocketBase(process.env.END_POINT);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // const record = await pb.collection('cards').getFullList(5, {
  //   filter: `name ~ '%${req.query.q}%' && grade != 0`,
  // });
  const record = cards.filter(v => v.name.includes(req.query.q) && v.grade !== 0);
  res.status(200).json(record);
}
