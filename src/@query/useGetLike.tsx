import { getLikeApi } from '@fetch/index';
import keys from '@query/keys';
import { useQuery } from 'react-query';

const useGetLike = ({ collectionId, recordId }: { collectionId: string; recordId: string }): [number | null] => {
  const { data } = useQuery([keys.getLike, collectionId, recordId], () => getLikeApi({ collectionId, recordId }), {
    onSuccess: () => {},
    onError: () => {},
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return [data];
};

export default useGetLike;
