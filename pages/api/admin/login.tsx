import sendWarn from '@lib/slack';
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
    await pb.admins.authWithPassword(pb.authStore.model.email, req.body.pw);
    res.status(200).send(null);
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
      await sendWarn({ title: '관리자 계정 로그인 시도', text: `관리자 계정 로그인 시도가 실패했습니다.` });
      res.status(500).send(err);
    }
  } finally {
    pb.authStore.clear();
  }
}
