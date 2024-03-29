import useBlockNotify from '@hooks/notify/useBlockNotify';
import isClient from '@lib/isClient';
import { getExp, isValidForRefresh } from '@lib/jwt';
import { pb } from '@lib/pb';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { userAtom } from 'src/@store/user';

const useUser = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const { expiredSession } = useBlockNotify();
  const getUser = async () => {
    const user = await pb.authStore.model;
    if (!user) return null;
    if (!pb.authStore.isValid) {
      expiredSession();
      return;
    }
    const date = getExp(pb.authStore.token);
    if (isValidForRefresh(date)) {
      const token = await pb.collection('users').authRefresh();
    }
    return user;
  };
  useQuery(['user'], getUser, {
    onSuccess: response => setUser(response),
    enabled: isClient() && !user,
  });

  return [user];
};

export default useUser;
