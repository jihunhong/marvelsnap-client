import { useEffect, useState } from 'react';
import * as T from '@customTypes/Card';
import { useQuery } from 'react-query';
import keys from '@query/keys';
import { getCardListApi } from '@fetch/index';
import { aggregate } from '@lib/collectionMapping';
import { CollectionCard } from '@customTypes/CollectionCard';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { collectionListAtom } from 'src/@store/collectionList';

const useAggregateCollection = (cardNames: string[], isFetched: boolean): [Array<CollectionCard>, SetterOrUpdater<CollectionCard[]>] => {
  const [collection, setCollection] = useRecoilState<Array<CollectionCard>>(collectionListAtom);
  const { data, isFetched: cardListFetched } = useQuery([keys.getCardList], getCardListApi, {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (isFetched && cardListFetched) {
      const collection = aggregate({ cardNames, data: data as Array<T.Card> });
      setCollection(collection);
    }
  }, [isFetched, cardListFetched]);

  return [collection, setCollection];
};

export default useAggregateCollection;
