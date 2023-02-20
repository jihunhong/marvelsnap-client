import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const user = await pb.collection('users').getOne(req.query.id);
    const record = await pb.collection('user_collection').getList(1, 1, {
      filter: `id="${user?.cId}"`,
    });
    return res.status(200).json(record?.items?.[0]);
  } catch (err) {
    res.status(404).json(err);
  }
}
