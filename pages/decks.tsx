import { getDeckListApi } from '@fetch/index';
import useInView from '@hooks/useInView';
import useSessionScroll from '@hooks/useSessionScroll';
import AppLayout from '@layout/AppLayout';
import DeckList from '@molecules/DeckList';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import useDeckListQuery from '@query/useDeckListQuery';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { dehydrate, QueryClient, useQueryClient } from 'react-query';

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery([keys.getDeckList], ({ pageParam = 1 }) => getDeckListApi(pageParam));
  // ssr에서는 첫페이지기 때문에
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

const Decks = () => {
  const { ref, visible } = useInView();
  const { dataSource, fetchNextPage, isLoading, hasNextPage } = useDeckListQuery();
  useSessionScroll({ targetUrl: '/deck/', key: 'deck:scrollY' });

  useEffect(() => {
    if (visible && hasNextPage && !isLoading) {
      fetchNextPage();
    }
  }, [visible, fetchNextPage, isLoading, hasNextPage]);

  return (
    <>
      <PageIntro title="Decks" description="메타에서 효과적인 다양한 덱들을 찾아보세요" bgSource="https://earlygame.com/uploads/images/_body/FutureMarvelSnap-Banner.jpg" />
      <section>
        <DeckList dataSource={dataSource} />
        {isLoading ? <>loading...</> : <div ref={hasNextPage ? ref : null}>{Number(hasNextPage)}</div>}
      </section>
    </>
  );
};

Decks.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;
export default Decks;
