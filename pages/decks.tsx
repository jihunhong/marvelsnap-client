import { getDeckListApi } from '@fetch/index';
import useInView from '@hooks/useInView';
import AppLayout from '@layout/AppLayout';
import DeckList from '@molecules/DeckList';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import useDeckListQuery from '@query/useDeckListQuery';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import DeckDetailModal from '@molecules/DeckDetailModal';
import { NextPageContext } from 'next';

export async function getServerSideProps({ req }: NextPageContext) {
  const queryClient = new QueryClient();
  // 첫 로드에서는 1페이지만 로딩하면 되기 때문에
  await queryClient.prefetchInfiniteQuery([keys.getDeckList], ({ pageParam = 1 }) => getDeckListApi(pageParam));
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

const Decks = () => {
  const { ref, visible: intersecting } = useInView();
  const { dataSource, fetchNextPage, isLoading, hasNextPage } = useDeckListQuery();
  const router = useRouter();

  useEffect(() => {
    if (intersecting && hasNextPage && !isLoading) {
      fetchNextPage();
    }
  }, [intersecting, fetchNextPage, isLoading, hasNextPage]);

  return (
    <>
      <PageIntro title="Decks" description="메타에서 효과적인 다양한 덱들을 찾아보세요" bgSource="https://earlygame.com/uploads/images/_body/FutureMarvelSnap-Banner.jpg" />
      <section>
        <DeckDetailModal visible={!!router.query.id} />
        <DeckList dataSource={dataSource} />
        {isLoading ? <>loading...</> : <div ref={hasNextPage ? ref : null} />}
      </section>
    </>
  );
};

Decks.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;
export default Decks;
