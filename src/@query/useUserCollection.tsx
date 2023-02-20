import { CollectionCard } from '@customTypes/CollectionCard';
import { getCollectionApi, getUsersCollectionApi } from '@fetch/index';
import useAggregateCollection from '@hooks/useAggregateCollection';
import keys from '@query/keys';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { collectionSelector, filterAtom, seriesCollectionListAtom } from 'src/@store/collectionList';

const useUserCollection = (): { collection: Array<CollectionCard>; updated: string } => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, isFetched } = useQuery([keys.getCollectionList], () => getUsersCollectionApi(id), {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
  const [collection] = useAggregateCollection(data?.cards, isFetched);
  const filteredCollectionList = useRecoilValue(collectionSelector);
  const filter = useRecoilValue(filterAtom);

  return { collection: filter ? filteredCollectionList : collection, updated: data?.updated };
};

export default useUserCollection;
