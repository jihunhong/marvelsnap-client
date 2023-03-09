import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  pb.authStore.save(req.headers.authorization);
  if (!pb.authStore.isValid) return res.status(401).end();

  try {
    await pb.collection('users').authRefresh();
  } catch (err) {
    pb.authStore.clear();
  }

  try {
    const article = await pb.collection('articles').create({
      title: req.body.title,
      summary: req.body.summary,
      content: req.body.content,
      writer: req.body.writer,
      thumbnail: req.body.thumbnail,
    });
    res.status(200).send(article);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err);
    }
  } finally {
    pb.authStore.clear();
  }
}
