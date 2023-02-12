import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

const postRequestForCreate = async (req, res) => {
  try {
    const record = await pb.collection('user_collection').getFirstListItem(`profileId='${req.body.profileId}'`);
    if (record) {
      const updated = await pb.collection('user_collection').update(record.id, {
        cards: JSON.stringify(req.body.cards),
      });
      return res.status(200).json(updated);
    }
  } catch (err) {
    const created = await pb.collection('user_collection').create({
      profileId: req.body.profileId,
      cards: JSON.stringify(req.body.cards),
    });
    return res.status(200).json(created);
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    if (req.method === 'POST') {
      return await postRequestForCreate(req, res);
    } else {
      const record = await pb.collection('user_collection').getList(1, 1, {
        filter: `profileId="${req.query.profileId}"`,
      });
      return res.status(200).json(record?.items?.[0]);
    }
  } catch (err) {
    res.status(404).json(err);
  }
}
