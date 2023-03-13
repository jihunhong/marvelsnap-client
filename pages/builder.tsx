import Card from '@atoms/Card';
import CardListHeader from '@atoms/CardListHeader';
import backgroundUrls from '@constant/backgrounds';
import * as T from '@customTypes/Card';
import { getCardListApi } from '@fetch/index';
import useBuilder from '@hooks/useBuilder';
import useToggle from '@hooks/useToggle';
import DivisionLayout from '@layout/DivisionLayout';
import CardList from '@molecules/CardList';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import useCardListQuery from '@query/useCardListQuery';
import { NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import { SyntheticEvent } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';
import { getIds } from 'src/@store/builder';

const CardFilter = dynamic(() => import('@molecules/CardFilter'), {
  ssr: false,
});
const BuilderStatus = dynamic(() => import('@molecules/BuilderStatus'), {
  ssr: false,
});

export async function getServerSideProps({ res }: NextPageContext) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([keys.getCardList], getCardListApi);
  res?.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=86400');
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Builder = () => {
  const [dataSource] = useCardListQuery();
  const [onClick] = useBuilder();
  const selectedIds = useRecoilValue(getIds);
  const [visible, handler, setVisible] = useToggle();

  const onAdd = (e: SyntheticEvent, item: T.Card) => {
    onClick(e, item);
    setVisible(true);
  };

  return (
    <>
      <PageIntro title="Deck Builder" description="" bgSource={backgroundUrls.builder} objectPosition="center center" />
      <DivisionLayout>
        <section>
          <CardListHeader filterEvent={handler} />
          <CardList
            dataSource={dataSource}
            renderItem={item => (
              <div key={item?.id} data-selected={selectedIds.includes(item?.id)} onClick={e => onAdd(e, item)}>
                <Card {...item} />
              </div>
            )}
          />
        </section>
        {visible ? <BuilderStatus /> : <CardFilter />}
      </DivisionLayout>
    </>
  );
};

export default Builder;
