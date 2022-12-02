import type { NextPage } from 'next';
import IntroVideoSection from '../src/components/@molecules/IntroSection';
import AppLayout from '../src/components/@layout/AppLayout';

const Home: NextPage = () => {
  return (
    <AppLayout>
      <section className="full-width">
        <IntroVideoSection />
        {/* <TrendingDecks/> */}
        {/* <RecentArticles/> */}
      </section>
    </AppLayout>
  );
};

export default Home;
