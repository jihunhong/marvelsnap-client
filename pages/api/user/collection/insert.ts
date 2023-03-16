import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

const postRequestForCreate = async (req, res) => {
  try {
    const user = await pb.collection('users').getFirstListItem(`id='${req.body.id}'`);
    const record = await pb.collection('user_collection').getFirstListItem(`id='${user.cId}'`);
    const exist = record.cards.find(cardDefId => cardDefId === req.body.cardDefId);
    let cards = [req.body.cardDefId, ...record.cards];
    if (exist) {
      cards = cards.filter(id => id !== req.body.cardDefId);
    }
    if (record) {
      await pb.collection('user_collection').update(record.id, {
        cards: JSON.stringify(cards),
      });
      return res.status(200).send(req.body.cardDefId);
    }
  } catch (err) {
    console.log(err.message);
    return res.status(404).send();
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    return await postRequestForCreate(req, res);
  } catch (err) {
    res.status(404).json(err);
  }
}
