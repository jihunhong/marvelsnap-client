import IntroSection from '@molecules/IntroSection';
import Trending from '@molecules/Trending';

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

export default Home;
