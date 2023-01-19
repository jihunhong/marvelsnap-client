import Button from '@atoms/Button';
import Card from '@atoms/Card';
import CardListHeader from '@atoms/CardListHeader';
import { getCardListApi } from '@fetch/index';
import useBuilder from '@hooks/useBuilder';
import useToggle from '@hooks/useToggle';
import DivisionLayout from '@layout/DivisionLayout';
import CardList from '@molecules/CardList';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import useCardListQuery from '@query/useCardListQuery';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { SyntheticEvent } from 'react';
import { BsFilter } from 'react-icons/bs';
import { dehydrate, QueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';
import { getIds } from 'src/@store/builder';

const CardFilter = dynamic(() => import('@molecules/CardFilter'), {
  ssr: false,
});
const BuilderStatus = dynamic(() => import('@molecules/BuilderStatus'), {
  ssr: false,
});

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([keys.getCardList], getCardListApi);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Builder: NextPage = () => {
  const [dataSource] = useCardListQuery();
  const [onClick] = useBuilder();
  const selectedIds = useRecoilValue(getIds);
  const [visible, handler, setVisible] = useToggle();

  const onAdd = (e: SyntheticEvent) => {
    onClick(e);
    setVisible(false);
  };

  return (
    <>
      <PageIntro title="Deck Builder" description="" bgSource="https://earlygame.com/uploads/images/_body/FutureMarvelSnap-Banner.jpg" />
      <DivisionLayout>
        <section>
          <CardListHeader filterEvent={handler} />
          <CardList
            dataSource={dataSource}
            renderItem={item => (
              <div
                key={item?.id}
                data-keywords={item?.keywords || ''}
                data-id={item?.id}
                data-name={item?.name}
                data-en={item?.en}
                data-cost={item?.cost}
                data-power={item?.power}
                data-selected={selectedIds.includes(item?.id)}
                onClick={onAdd}
              >
                <Card {...item} />
              </div>
            )}
          />
        </section>
        {visible ? <CardFilter /> : <BuilderStatus />}
      </DivisionLayout>
    </>
  );
};

export default Builder;
