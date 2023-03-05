import type { NextApiRequest, NextApiResponse } from 'next';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.END_POINT);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  pb.authStore.save(req.headers.authorization);
  if (!pb.authStore.isValid) return res.status(401).end();

  try {
    const user = await pb.collection('users').getFirstListItem(`id='${req.body.userId}'`);
    const userCollection = await pb.collection('user_collection').getFirstListItem(`profileId='${req.body.profileId}'`);
    if (user && userCollection) {
      const updated = await pb.collection('users').update(user.id, {
        cId: userCollection.id,
      });
      return res.status(200).json(updated);
    }
  } catch (err) {
    return res.status(404).send('Not Found User or Collection');
  }
}
