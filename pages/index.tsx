import { getArticleListApi } from '@fetch/index';
import IntroSection from '@molecules/IntroSection';
import Trending from '@molecules/Trending';
import keys from '@query/keys';
import { dehydrate, QueryClient } from 'react-query';

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([keys.getArticles], () => getArticleListApi());
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

const Home = () => {
  return (
    <>
      <section className="full-width">
        <IntroSection />
      </section>
      <Trending />
    </>
  );
};

export default Home;
