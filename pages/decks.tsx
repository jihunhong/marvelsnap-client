import backgroundUrls from '@constant/intro-background';
import { defaultTitle } from '@constant/text';
import { getDeckListApi } from '@fetch/index';
import DeckList from '@molecules/DeckList';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import useDeckListQuery from '@query/useDeckListQuery';
import { NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { dehydrate, QueryClient } from 'react-query';

const DeckDetailModal = dynamic(() => import('@molecules/Modal/DeckDetailModal'), {
  ssr: false,
});

export async function getServerSideProps({ res }: NextPageContext) {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery([keys.getDeckList], ({ pageParam = 1 }) => getDeckListApi(pageParam));
  res?.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

const Decks = () => {
  const { dataSource, fetchNextPage, isFetching, isFetchingNextPage, hasNextPage } = useDeckListQuery();
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
      <PageIntro title="Decks" description="메타에서 효과적인 다양한 덱들을 찾아보세요" bgSource={backgroundUrls.cards} objectPosition="center bottom" />
      <section>
        {!!router.query.id ? <DeckDetailModal visible={!!router.query.id} /> : null}
        <DeckList dataSource={dataSource} />
        {isFetching && !isFetchingNextPage ? <>loading...</> : <div ref={ref} />}
      </section>
    </>
  );
};

export default Decks;
