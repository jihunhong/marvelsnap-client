import redis from '@lib/redis';
import keys from '@query/keys';
import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const exist = await redis.exists(keys.getCardList);
    if (exist) {
      const cards = await redis.get(keys.getCardList);
      console.log(cards);
      if (cards) {
        res.setHeader('redis-cache', 'HIT');
        return res.status(200).json(JSON.parse(cards));
      }
    }
    const temp = await pb.collection('cards').getFullList(300, {
      expand: 'keywords.name',
      sort: '+cost,+power,+en',
      filter: 'grade!=0',
    });
    console.log(temp);
    await redis.set(keys.getCardList, JSON.stringify(temp));
    res.setHeader('redis-cache', 'MISS');
    return res.status(200).json(temp);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}
