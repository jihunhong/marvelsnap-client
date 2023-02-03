import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const record = await pb.collection('cards').getFirstListItem(`cardDefId='${req.query.cardDefId}'`, {
    expand: 'variants',
  });
  res.status(200).json(record);
}
