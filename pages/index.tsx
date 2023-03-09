import { getArticleListApi } from '@fetch/index';
import IntroSection from '@molecules/IntroSection';
import Trending from '@molecules/Trending';
import keys from '@query/keys';
import { NextPageContext } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';

export async function getServerSideProps({ res }: NextPageContext) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([keys.getArticles], () => getArticleListApi());
  res?.setHeader('Cache-Control', 'public, s-maxage=31536000, max-age=0, stale-while-revalidate=59');
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

const Home = () => {
  const { data } = useQuery([keys.getArticles], () => getArticleListApi(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
  return (
    <>
      <section className="full-width">
        <IntroSection />
      </section>
      <Trending dataSource={data?.items} />
    </>
  );
};

export default Home;
