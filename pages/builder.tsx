import Card from '@atoms/Card';
import CardListHeader from '@atoms/CardListHeader';
import backgroundUrls from '@constant/intro-background';
import * as T from '@customTypes/Card';
import { getCardListApi } from '@fetch/index';
import useNotify from '@hooks/notify/useNotify';
import useBuilder from '@hooks/useBuilder';
import useMobileCheck from '@hooks/useMobileCheck';
import useToggle from '@hooks/useToggle';
import AppLayout from '@layout/AppLayout';
import DivisionLayout from '@layout/DivisionLayout';
import BuilderStatus from '@molecules/BuilderStatus';
import CardFilter from '@molecules/CardFilter';
import CardList from '@molecules/CardList';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import useCardListQuery from '@query/useCardListQuery';
import Head from 'next/head';
import { ReactElement, SyntheticEvent, useEffect } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';
import { getIds } from 'src/@store/builder';

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([keys.getCardList], getCardListApi);

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
  const [isMobile] = useMobileCheck();
  const notify = useNotify();
  useEffect(() => {
    if (isMobile) notify.responsiveWarn();
  }, [isMobile]);

  const onAdd = (e: SyntheticEvent, item: T.Card) => {
    onClick(e, item);
    setVisible(false);
  };

  return (
    <>
      <Head>
        <meta name="Robots" content="noindex,nofollow" />
      </Head>
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
        {visible ? <CardFilter /> : <BuilderStatus />}
      </DivisionLayout>
    </>
  );
};

Builder.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;
export default Builder;
