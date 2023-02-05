import Card from '@atoms/Card';
import { baseImgix } from '@constant/imigx';
import { CollectionCard } from '@customTypes/CollectionCard';
import { getUserCollectionApi } from '@fetch/index';
import AppLayout from '@layout/AppLayout';
import DivisionLayout from '@layout/DivisionLayout';
import { formatWithTime } from '@lib/day';
import CardList from '@molecules/CardList';
import CollectionFilter from '@molecules/ColletionFilter';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import useGetUserCollection from '@query/useGetUserCollection';
import { NextPageContext } from 'next';
import Link from 'next/link';
import { ReactElement } from 'react';
import { dehydrate, QueryClient } from 'react-query';

export async function getServerSideProps(context: NextPageContext) {
  const queryClient = new QueryClient();
  const profileId = context.query.profileId as string;
  await queryClient.prefetchQuery([keys.getUserCollection], () => getUserCollectionApi(profileId));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const InstantProfile = () => {
  const { collection, profileId, updated } = useGetUserCollection();

  return (
    <>
      <PageIntro title="Collection" description={`${formatWithTime(updated)}에 업데이트된 컬렉션입니다`} bgSource={`${baseImgix}/static/collection-page-background.webp`} />
      <DivisionLayout>
        <section>
          <CardList
            dataSource={collection}
            renderItem={item => (
              <Link key={item?.id} href={`/cards?id=${item?.cardDefId}`} as={`/card/${item?.cardDefId}`} scroll={false} shallow={true}>
                <a id={item?.cardDefId}>
                  <div data-selected={(item as CollectionCard)?.mine}>
                    <Card {...item} w={116} />
                  </div>
                </a>
              </Link>
            )}
          />
        </section>
        <CollectionFilter />
      </DivisionLayout>
    </>
  );
};

InstantProfile.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;
export default InstantProfile;
