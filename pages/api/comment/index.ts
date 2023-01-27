import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  pb.authStore.save(req.headers.authorization);
  if (!pb.authStore.isValid) res.status(401).send('Bad authorization');

  try {
    await pb.collection('users').authRefresh();
  } catch (err) {
    console.error(err.message);
    pb.authStore.clear();
  }

  try {
    const record = await pb.collection('comments').create({
      collection: req.body.collectionId,
      recordId: req.body.recordId,
      content: req.body.content,
      user: pb.authStore.model?.id,
    });
    res.status(200).json(record);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err);
      console.error(err.message);
    }
  } finally {
    pb.authStore.clear();
  }
}
