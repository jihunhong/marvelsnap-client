import * as T from '@customTypes/Comment';
import { getCommentApi } from '@fetch/index';
import keys from '@query/keys';
import { SyntheticEvent, useDebugValue } from 'react';
import { useInfiniteQuery } from 'react-query';

/**
 * @comment pageParam의 기본값은 SSR에서 이미 가져온 페이지가 1이므로 2부터 시작하도록 기본값을 2로 선언했다
 * @comment L:18의 dataSource로 mapping하는 과정은
 * useInfiniteQuery와 useQuery에서 리턴되는 data의 형태가 다르기 때문에 변환한다.
 */

const useCommentListQuery = ({ collectionId, recordId }: { collectionId: string; recordId: string }) => {
  const { data, fetchNextPage } = useInfiniteQuery([keys.getCommentList, collectionId, recordId], ({ pageParam = 1 }) => getCommentApi({ collectionId, recordId, page: pageParam }), {
    getNextPageParam: data => (data.page === data.totalPages ? undefined : data.page + 1),
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const handler = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }
    fetchNextPage();
  };

  const isLast = data?.pages?.[0]?.totalPages === data?.pages?.[0]?.page || data?.pages?.[0]?.totalPages === 0;
  const dataSource: undefined | T.Comment[] = data?.pages?.map(p => p.items).flat();

  useDebugValue([data, isLast]);

  return { dataSource, handler, isLast };
};

export default useCommentListQuery;
