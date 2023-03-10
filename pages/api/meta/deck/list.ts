import redis from '@lib/redis';
import keys from '@query/keys';
import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);
const PER_PAGE = 12;

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const page = req.query.page || 1;
  const KEY = `${keys.getMetaDeckList}?page=${page}`;
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=30');
  try {
    const exist = await redis.exists(KEY);
    if (exist) {
      const decks = await redis.get(KEY);
      if (decks) {
        res.setHeader('redis-cache', 'HIT');
        return res.status(200).json(JSON.parse(decks));
      }
    }
    const temp = await pb.collection('meta_deck').getList(page, PER_PAGE, {
      sort: '-created',
      expand: 'items',
    });
    await redis.set(KEY, JSON.stringify(temp));
    res.setHeader('redis-cache', 'MISS');
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=30');
    return res.status(200).json(temp);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}
