import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === 'GET') {
    const record = await pb.collection('meta_deck').getFirstListItem(`id='${req.query.id}'`, {
      expand: 'items',
    });
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=60');
    res.status(200).json(record);
  } else if (req.method === 'POST') {
    pb.authStore.save(req.headers.authorization);
    if (!pb.authStore.isValid) return res.status(401).end();

    try {
      const record = await pb.collection('meta_deck').create({
        title: req.body.title,
        description: req.body.description,
        origin: req.body.origin,
        writer: req.body.writer,
        items: req.body.items,
      });
      res.status(200).json(record);
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.send('not valid method request');
  }
}
