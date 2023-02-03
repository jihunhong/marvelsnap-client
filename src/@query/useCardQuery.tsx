import { Card } from '@customTypes/Card';
import { getCardApi } from '@fetch/index';
import keys from '@query/keys';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const useCardQuery = (): [Card] => {
  const router = useRouter();
  const id = router.query?.cardDefId || router.query?.id;
  const { data } = useQuery([keys.getCard, id], () => getCardApi(id), {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
  return [data];
};

export default useCardQuery;
