import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  pb.authStore.save(req.headers.authorization);
  if (!pb.authStore.isValid) res.status(401).send('Bad authorization');

  try {
    await pb.collection('users').authRefresh();
  } catch (_) {
    pb.authStore.clear();
  }

  try {
    const exist = await pb.collection('rating').getFirstListItem(`collection="${req.body.collectionId}" && recordId="${req.body.recordId}" && user="${pb.authStore.model?.id}"`);
    await pb.collection('rating').update(exist.id, {
      score: req.body.score,
    });
    pb.authStore.clear();
    return res.status(200).end();
  } catch (_) {}

  try {
    const record = await pb.collection('rating').create({
      collection: req.body.collectionId,
      recordId: req.body.recordId,
      score: req.body.score,
      user: pb.authStore.model?.id,
    });
    res.status(200).json(record);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).send(err);
    }
  } finally {
    pb.authStore.clear();
  }
}
