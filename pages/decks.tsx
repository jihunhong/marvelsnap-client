import backgroundUrls from '@constant/intro-background';
import { defaultTitle } from '@constant/text';
import { getDeckListApi } from '@fetch/index';
import AppLayout from '@layout/AppLayout';
import DeckList from '@molecules/DeckList';
import DeckDetailModal from '@molecules/Modal/DeckDetailModal';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import useDeckListQuery from '@query/useDeckListQuery';
import { NextPageContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { dehydrate, QueryClient } from 'react-query';

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
  const { dataSource, fetchNextPage, isFetching, isFetchingNextPage, hasNextPage, status } = useDeckListQuery();
  const { ref, inView } = useInView();
  const router = useRouter();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <>
      <Head>
        <title>{`덱 리스트, 덱 갤러리, 덱 DB - ${defaultTitle}`}</title>
      </Head>
      <PageIntro title="Decks" description="메타에서 효과적인 다양한 덱들을 찾아보세요" bgSource={backgroundUrls.builder} objectPosition="center bottom" />
      <section>
        <DeckDetailModal visible={!!router.query.id} />
        <DeckList dataSource={dataSource} />
        {isFetching && !isFetchingNextPage ? <>loading...</> : <div ref={ref} />}
      </section>
    </>
  );
};

Decks.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;
export default Decks;
