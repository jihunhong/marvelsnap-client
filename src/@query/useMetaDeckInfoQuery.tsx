import { getMetaDeckApi } from '@fetch/index';
import keys from '@query/keys';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const useMetaDeckInfoQuery = () => {
  const router = useRouter();
  const id = router.query?.deckId || router.query?.id;
  const { data } = useQuery([keys.getMetaDeck, id], () => getMetaDeckApi(id as string), {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
  return [data];
};

export default useMetaDeckInfoQuery;
