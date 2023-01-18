import { getScoreApi } from '@fetch/index';
import keys from '@query/keys';
import { useQuery } from 'react-query';

const useScoreList = ({ collectionId, recordId }: { collectionId: string; recordId: string }) => {
  const { data } = useQuery([keys.getScoreList, collectionId, recordId], () => getScoreApi({ collectionId, recordId }), {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { avg: data?.avg?.toFixed(1), ratings: data?.ratings };
};

export default useScoreList;
