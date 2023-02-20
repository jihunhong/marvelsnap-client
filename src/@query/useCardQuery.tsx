import { Card } from '@customTypes/Card';
import { getCardApi } from '@fetch/index';
import keys from '@query/keys';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { variantsSelector } from 'src/@store/variants';

const useCardQuery = (): [Card] => {
  const router = useRouter();
  const id = router.query?.cardDefId || router.query?.id;
  const variantsSetter = useSetRecoilState(variantsSelector);
  const { data, isSuccess } = useQuery([keys.getCard, id], () => getCardApi(id as string), {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!id,
  });

  useEffect(() => {
    if (isSuccess) {
      variantsSetter(data);
    }
  }, [isSuccess]);
  return [data];
};

export default useCardQuery;
