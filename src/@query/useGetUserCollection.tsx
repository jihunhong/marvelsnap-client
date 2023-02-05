import { CollectionCard } from '@customTypes/CollectionCard';
import { getUserCollectionApi } from '@fetch/index';
import useAggregateCollection from '@hooks/useAggregateCollection';
import keys from '@query/keys';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { filterAtom, filteredCollectionListAtom } from 'src/@store/collectionList';

const useGetUserCollection = (): { collection: Array<CollectionCard>; profileId: string; updated: string } => {
  const router = useRouter();
  const profileId = router.query.profileId as string;
  const { data, isFetched } = useQuery([keys.getUserCollection], () => getUserCollectionApi(profileId), {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!profileId,
  });
  const [collection] = useAggregateCollection(data?.cards, isFetched);
  const filteredCollectionList = useRecoilValue(filteredCollectionListAtom);
  const filter = useRecoilValue(filterAtom);

  return { collection: filter ? filteredCollectionList : collection, profileId: data?.profileId, updated: data?.updated };
};

export default useGetUserCollection;
