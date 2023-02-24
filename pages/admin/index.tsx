import Card from '@atoms/Card';
import CardListHeader from '@atoms/CardListHeader';
import useBuilder from '@hooks/useBuilder';
import * as T from '@customTypes/Card';
import useAdmin from '@hooks/user/useAdmin';
import useToggle from '@hooks/useToggle';
import DivisionLayout from '@layout/DivisionLayout';
import CardList from '@molecules/CardList';
import useCardListQuery from '@query/useCardListQuery';
import { SyntheticEvent } from 'react';
import { useRecoilValue } from 'recoil';
import { getIds } from 'src/@store/builder';
import dynamic from 'next/dynamic';
import PageIntro from '@molecules/PageIntro';
import backgroundUrls from '@constant/backgrounds';
import Head from 'next/head';

const CardFilter = dynamic(() => import('@molecules/CardFilter'), {
  ssr: false,
});
const AdminBuilderStatus = dynamic(() => import('@molecules/AdminBuilderStatus'), {
  ssr: false,
});

const Admin = () => {
  const [isAdmin] = useAdmin();
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
      <Head>
        <meta name="Robots" content="noindex,nofollow" />
      </Head>
      <PageIntro title="Admin Deck Builder" description="" bgSource={backgroundUrls.builder} objectPosition="center center" />
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
        {visible ? <AdminBuilderStatus /> : <CardFilter />}
      </DivisionLayout>
    </>
  );
};

export default dynamic(() => Promise.resolve(Admin), {
  ssr: false,
});
