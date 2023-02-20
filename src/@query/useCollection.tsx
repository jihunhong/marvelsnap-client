import { CollectionCard } from '@customTypes/CollectionCard';
import { getCollectionApi } from '@fetch/index';
import useAggregateCollection from '@hooks/useAggregateCollection';
import keys from '@query/keys';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { collectionSelector, filterAtom, seriesCollectionListAtom } from 'src/@store/collectionList';

const useCollection = (): { collection: Array<CollectionCard>; profileId: string; updated: string } => {
  const router = useRouter();
  const profileId = router.query.profileId as string;
  const { data, isFetched } = useQuery([keys.getCollection], () => getCollectionApi(profileId), {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!profileId,
  });
  const [collection] = useAggregateCollection(data?.cards, isFetched);
  const filteredCollectionList = useRecoilValue(collectionSelector);
  const filter = useRecoilValue(filterAtom);

  return { collection: filter ? filteredCollectionList : collection, profileId: data?.profileId, updated: data?.updated };
};

export default useCollection;
