import AppLayout from '@layout/AppLayout';
import IntroSection from '@molecules/IntroSection';
import Trending from '@molecules/Trending';
import { ReactElement } from 'react';

const Home = () => {
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

Home.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;
export default Home;
