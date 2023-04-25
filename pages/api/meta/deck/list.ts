import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);
const PER_PAGE = 12;

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const page = req.query.page || 1;
  try {
    const temp = await pb.collection('meta_deck').getList(page, PER_PAGE, {
      sort: '-created',
      expand: 'items',
    });
    return res.status(200).json(temp);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}
