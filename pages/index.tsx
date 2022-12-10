import type { NextPage } from 'next';
import IntroVideoSection from '../src/components/@molecules/IntroSection';
import AppLayout from '../src/components/@layout/AppLayout';
import Trending from '../src/components/@molecules/Trending';

const Home: NextPage = () => {
  return (
    <AppLayout>
      <section className="full-width">
        <IntroVideoSection />
        {/* <RecentArticles/> */}
      </section>
      <Trending />
    </AppLayout>
  );
};

export default Home;
