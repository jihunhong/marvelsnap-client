import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const comments = await pb.collection('comments').getList(1, 30, {
    filter: `collection='${req.query?.collectionId}' && recordId='${req.query?.recordId}'`,
    expand: 'user',
    sort: '-created',
    page: req.query?.page || 1,
    perPage: 12,
  });

  res.status(200).json(comments);
}
