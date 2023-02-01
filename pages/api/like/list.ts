import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const result = await pb.collection('like').getList(1, 1, {
      filter: `collection = "${req.query.collectionId}" && recordId = "${req.query.recordId}"`,
    });
    res.status(200).json(result.totalItems);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).send(err);
    }
  }
}
