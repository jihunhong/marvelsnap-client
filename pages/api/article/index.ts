import redis from '@lib/redis';
import keys from '@query/keys';
import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const KEY = `${keys.getArticle}?id=${req.query.id}`;
  try {
    const exist = await redis.exists(KEY);
    if (exist) {
      const article = await redis.get(KEY);
      if (article) {
        res.setHeader('redis-cache', 'HIT');
        return res.status(200).json(JSON.parse(article));
      }
    }
    const temp = await pb.collection('articles').getFirstListItem(`id="${req.query.id}"`);
    await redis.set(KEY, JSON.stringify(temp));
    res.setHeader('redis-cache', 'MISS');
    res.status(200).json(temp);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}
