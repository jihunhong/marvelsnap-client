import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

type Data = {
  name: string;
};

const pb = new PocketBase('http://127.0.0.1:8090');

/**
 * @description : 덱 Post 요청 /특정 덱 정보 GET
 */

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const record = await pb.collection('decks').create({
      title: req.body.title,
      description: 'none',
      items: req.body.items,
    });
    res.status(200).json(record);
  } else {
    const record = await pb.collection('decks').getFirstListItem(`id='${req.query.id}'`, {
      expand: 'items',
    });
    res.status(200).json(record);
  }
}
