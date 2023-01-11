import keys from '@query/keys';
import useDeckListQuery from '@query/useDeckListQuery';
import { NextPage } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import DeckList from 'src/@components/@molecules/DeckList';
import PageIntro from 'src/@components/@molecules/PageIntro';
import { getDeckListApi } from 'src/@fetch';

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(keys.getDeckList, getDeckListApi);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Decks: NextPage = () => {
  const dataSource = useDeckListQuery();
  console.log(dataSource);
  return (
    <>
      <PageIntro title="Decks" description="메타에서 효과적인 다양한 덱들을 찾아보세요" bgSource="https://earlygame.com/uploads/images/_body/FutureMarvelSnap-Banner.jpg" />
      <section>
        <DeckList dataSource={dataSource?.items} />
      </section>
    </>
  );
};

export default Decks;
