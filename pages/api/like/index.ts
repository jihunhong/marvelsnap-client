import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const postRequestForCreate = async (req: NextApiRequest, pb: PocketBase) => {
  const record = await pb.collection('like').create({
    collection: req.body.collectionId,
    recordId: req.body.recordId,
    user: pb.authStore.model?.id,
  });
  return record;
};

const getRequestForRead = async (req: NextApiRequest, pb: PocketBase) => {
  const result = await pb.collection('like').getList(1, 30, {
    filter: `collection = "${req.body.collectionId}" && recordId = "${req.body.recordId}" && user = "${pb.authStore.model?.id}"`,
  });
  return result;
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
    if (req.method === 'POST') {
      const record = await postRequestForCreate(req, pb);
      res.status(200).json(record);
    } else if (req.method === 'GET') {
      const result = await getRequestForRead(req, pb);
      console.log(result);
      res.status(200).json(result);
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).send(err);
    }
  } finally {
    pb.authStore.clear();
  }
}
