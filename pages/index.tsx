import type { NextPage } from 'next';
import IntroSection from 'src/@components/@molecules/IntroSection';
import Trending from 'src/@components/@molecules/Trending';

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
