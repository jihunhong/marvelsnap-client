import collections from '@constant/collections';
import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

const postRequestForCreate = async (req: NextApiRequest, pb: PocketBase) => {
  const record = await pb.collection('comments').create({
    collection: req.body.collectionId,
    recordId: req.body.recordId,
    content: req.body.content,
    user: pb.authStore.model?.id,
  });
  if (req.body.collectionId === collections.deck) {
    await pb.collection(req.body.collectionId).update(req.body.recordId, {
      comment: record.id,
    });
  }
  return record;
};

const deleteRequestForRemove = async (req: NextApiRequest, pb: PocketBase) => {
  await pb.collection('comments').delete(req.body.id);
  return;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  pb.authStore.save(req.headers.authorization);
  if (!pb.authStore.isValid) return res.status(401).end();

  try {
    if (req.method === 'POST') {
      const record = await postRequestForCreate(req, pb);
      res.status(200).json(record);
    } else if (req.method === 'DELETE') {
      await deleteRequestForRemove(req, pb);
      res.status(200).send(null);
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err);
      console.error(err.message);
    }
  } finally {
    pb.authStore.clear();
  }
}
