import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

/**
 * @description : 덱 Post 요청 /특정 덱 정보 GET
 */

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    if (req.method === 'POST') {
      pb.authStore.save(req.headers.authorization);
      if (!pb.authStore.isValid) return res.status(401).end();

      try {
        await pb.collection('users').authRefresh();
      } catch (err) {
        console.error(err.message);
        pb.authStore.clear();
      }
      const record = await pb.collection('decks').create({
        title: req.body.title,
        description: req.body.description,
        items: req.body.items,
        writer: pb.authStore.model?.id,
      });
      res.status(200).json(record);
    } else {
      const record = await pb.collection('decks').getFirstListItem(`id='${req.query.id}'`, {
        expand: 'items, writer',
      });
      res.status(200).json(record);
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).send(err);
    }
  }
}
