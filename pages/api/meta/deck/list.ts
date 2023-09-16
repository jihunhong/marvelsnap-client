import redis from '@lib/redis';
import keys from '@query/keys';
import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);
const PER_PAGE = 12;

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const page = req.query.page || 1;
  const key = `${keys.getMetaDeckList}?page=${page}&perPage=${PER_PAGE}`;
  const exist = await redis.exists(key);
  if (exist) {
    const decks = await redis.get(key);
    if (decks) {
      res.setHeader('redis-cache', 'HIT');
      return res.status(200).json(JSON.parse(decks));
    }
  }
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
