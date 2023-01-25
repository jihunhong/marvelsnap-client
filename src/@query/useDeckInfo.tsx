import { getDeckApi } from '@fetch/index';
import keys from '@query/keys';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const useDeckInfoQuery = () => {
  const router = useRouter();
  const id = router.query?.deckId;
  const { data } = useQuery([keys.getDeck, id], () => getDeckApi(id), {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return [data];
};

export default useDeckInfoQuery;
