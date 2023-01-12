import type { NextPage } from 'next';
import IntroSection from '@molecules/IntroSection';
import Trending from '@molecules/Trending';

const Home: NextPage = () => {
  return (
    <>
      <section className="full-width">
        <IntroSection />
        {/* <RecentArticles/> */}
      </section>
      <Trending />
    </>
  );
};

export default Home;
