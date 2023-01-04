import Card from '@atoms/Card';
import useBuilder from '@hooks/useBuilder';
import keys from '@query/keys';
import useCardListQuery from '@query/useCardListQuery';
import { NextPage } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import DivisionLayout from 'src/@components/@layout/DivisionLayout';
import BuilderStatus from 'src/@components/@molecules/BuilderStatus';
import CardList from 'src/@components/@molecules/CardList';
import PageIntro from 'src/@components/@molecules/PageIntro';
import { fetchCardList } from 'src/@fetch';

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([keys.cardList, null], fetchCardList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Builder: NextPage = () => {
  const [dataSource] = useCardListQuery();
  const [onClick] = useBuilder();

  return (
    <>
      <PageIntro title="Deck Builder" description="" bgSource="https://earlygame.com/uploads/images/_body/FutureMarvelSnap-Banner.jpg" />
      <DivisionLayout>
        <CardList
          dataSource={dataSource}
          renderItem={item => (
            <div key={item?.id} data-id={item?.id} data-name={item?.name} data-en={item?.en} data-cost={item?.cost} onClick={onClick}>
              <Card {...item} />
            </div>
          )}
        />
        <BuilderStatus />
      </DivisionLayout>
    </>
  );
};

export default Builder;
