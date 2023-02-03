import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const ratings = await pb.collection('rating').getFullList(330, {
    sort: '-created',
    filter: `collection="${req.query.collectionId}" && recordId="${req.query.recordId}"`,
  });
  const avg = ratings?.reduce((p, c) => p + c.score, 0) / ratings?.length;
  const first = ratings?.filter(item => item.score === 1);
  const second = ratings?.filter(item => item.score === 2);
  const third = ratings?.filter(item => item.score === 3);
  const fourth = ratings?.filter(item => item.score === 4);
  const fifth = ratings?.filter(item => item.score === 5);
  res.status(200).json({
    ratings: {
      first: ((first.length / ratings.length) * 100).toFixed(1),
      second: ((second.length / ratings.length) * 100).toFixed(1),
      third: ((third.length / ratings.length) * 100).toFixed(1),
      fourth: ((fourth.length / ratings.length) * 100).toFixed(1),
      fifth: ((fifth.length / ratings.length) * 100).toFixed(1),
    },
    avg: avg.toFixed(1) | 0,
  });
}
