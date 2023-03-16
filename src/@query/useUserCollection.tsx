import { CollectionCard } from '@customTypes/CollectionCard';
import { getUsersCollectionApi, putUserCollectionApi } from '@fetch/index';
import useAggregateCollection from '@hooks/useAggregateCollection';
import keys from '@query/keys';
import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { collectionSelector, filterAtom, toggleOwnCard } from 'src/@store/collectionList';

const useUserCollection = (): { collection: Array<CollectionCard>; updated: string; toggleCardStatus: (e: SyntheticEvent) => void } => {
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
  const toggleCard = useSetRecoilState(toggleOwnCard);
  const { mutate } = useMutation(putUserCollectionApi, {
    onSuccess: cardDefId => {
      toggleCard(cardDefId);
    },
  });
  const toggleCardStatus = (e: SyntheticEvent) => {
    const cardDefId = e.currentTarget.dataset?.carddefid;
    if (cardDefId) {
      mutate({ id, cardDefId });
    }
  };

  return { collection: filter ? filteredCollectionList : collection, updated: data?.updated, toggleCardStatus };
};

export default useUserCollection;
