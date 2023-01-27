import { pb } from '@lib/pb';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { userAtom } from 'src/@store/user';

const useUser = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const getUser = async () => {
    return await pb.authStore.model;
  };
  useQuery('user', getUser, {
    onSuccess: response => setUser(response),
  });

  return [user];
};

export default useUser;
