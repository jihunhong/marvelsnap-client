import type { NextPage } from 'next';
import IntroVideoSection from '../src/components/@molecules/IntroSection';
import Trending from '../src/components/@molecules/Trending';

const Home: NextPage = () => {
  return (
    <>
      <section className="full-width">
        <IntroVideoSection />
        {/* <RecentArticles/> */}
      </section>
      <Trending />
    </>
  );
};

export default Home;
