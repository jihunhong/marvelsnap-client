import * as T from '@customTypes/Deck';
import { getDeckListApi } from '@fetch/index';
import keys from '@query/keys';
import { useMemo, useState } from 'react';
import { useInfiniteQuery } from 'react-query';

/**
 * @comment pageParam의 기본값은 SSR에서 이미 가져온 페이지가 1이므로 2부터 시작하도록 기본값을 2로 선언했다
 * @comment L:18의 dataSource로 mapping하는 과정은
 * useInfiniteQuery와 useQuery에서 리턴되는 data의 형태가 다르기 때문에 변환한다.
 */

const useDeckListQuery = () => {
  const { data, fetchNextPage, isFetching, isFetchingNextPage, hasNextPage } = useInfiniteQuery([keys.getDeckList], ({ pageParam = 2 }) => getDeckListApi(pageParam), {
    getNextPageParam: data => {
      return data.page === data.totalPages ? undefined : data.page + 1;
    },
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const dataSource: undefined | T.Deck[] = useMemo(() => data?.pages?.map(p => p.items)?.flat(), [data]);
  return { dataSource, fetchNextPage, isFetching, isFetchingNextPage, hasNextPage };
};

export default useDeckListQuery;
