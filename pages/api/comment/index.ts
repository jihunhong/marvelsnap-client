import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const getRequestForCreate = async (req: NextApiRequest, pb: PocketBase) => {
  const record = await pb.collection('comments').create({
    collection: req.body.collectionId,
    recordId: req.body.recordId,
    content: req.body.content,
    user: pb.authStore.model?.id,
  });
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
    await pb.collection('users').authRefresh();
  } catch (err) {
    console.error(err.message);
    pb.authStore.clear();
  }

  try {
    if (req.method === 'POST') {
      const record = await getRequestForCreate(req, pb);
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
