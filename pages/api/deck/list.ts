import { END_POINT } from '@fetch/index';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const decks = await axios.get(`${END_POINT}/api/collections/decks/records`, {
    params: {
      expand: 'items, writer',
      sort: '-created',
      page: req.query?.page || 1,
      perPage: 12,
    },
  });
  res.status(200).json(decks);
}
