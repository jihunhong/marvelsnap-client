import collections from '@constant/collections';
import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

const postRequestForCreate = async (req: NextApiRequest, pb: PocketBase) => {
  const record = await pb.collection('like').create({
    collection: req.body.collectionId,
    recordId: req.body.recordId,
    user: pb.authStore.model?.id,
  });
  if (req.body.collectionId === collections.deck) {
    await pb.collection(req.body.collectionId).update(req.body.recordId, {
      like: record.id,
    });
  }
  return record;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  pb.authStore.save(req.headers.authorization);
  if (!pb.authStore.isValid) return res.status(401).end();

  try {
    await pb.collection('users').authRefresh();
  } catch (_) {
    pb.authStore.clear();
  }

  // Duplicate check
  try {
    await pb.collection('like').getFirstListItem(`collection="${req.body.collectionId}" && recordId="${req.body.recordId}" && user="${pb.authStore.model?.id}"`);
    pb.authStore.clear();
    return res.status(409).end();
  } catch (_) {}

  try {
    const record = await postRequestForCreate(req, pb);
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
