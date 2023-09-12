import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';
import articles from './articles-demo.json';

const pb = new PocketBase(process.env.END_POINT);
const perPage = 5;
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // const articles = await pb.collection('articles').getList(1, perPage, {
  //   sort: '-created',
  // });
  res.status(200).json(articles);
}
