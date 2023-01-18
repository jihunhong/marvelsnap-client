import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

type Data = {
  name: string;
};

const pb = new PocketBase('http://127.0.0.1:8090');

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const record = await pb.collection('cards').getFirstListItem(`cardDefId='${req.query.cardDefId}'`, {
    expand: 'variants',
  });
  res.status(200).json(record);
}
