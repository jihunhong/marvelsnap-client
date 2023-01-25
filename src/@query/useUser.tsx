import { pb } from '@lib/pb';
import { useQuery } from 'react-query';

const useUser = () => {
  const getUser = async () => {
    return await pb.authStore.model;
  };
  const { data } = useQuery('user', getUser);

  return [data];
};

export default useUser;
