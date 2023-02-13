import Button from '@atoms/Button';
import ButtonGroup from '@atoms/ButtonGroup';
import Card from '@atoms/Card';
import backgroundUrls from '@constant/backgrounds';
import { CollectionCard } from '@customTypes/CollectionCard';
import { getUserCollectionApi } from '@fetch/index';
import useCollectionFilter from '@hooks/useCollectionFilter';
import DivisionLayout from '@layout/DivisionLayout';
import time from '@lib/day/time';
import CardList from '@molecules/CardList';
import CollectionFilter from '@molecules/ColletionFilter';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import useGetUserCollection from '@query/useGetUserCollection';
import { NextPageContext } from 'next';
import Link from 'next/link';
import { dehydrate, QueryClient } from 'react-query';
import { NextSeo } from 'next-seo';

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
  const [onClick] = useCollectionFilter();
  return (
    <>
      <PageIntro title="Collection" description={`${time(updated)}에 업데이트된 컬렉션입니다`} bgSource={backgroundUrls.profileCollection} />
      <DivisionLayout>
        <section>
          <ButtonGroup>
            <Button data-type="own" data-value="all" onClick={onClick} className="active">
              All cards
            </Button>
            <Button data-type="own" data-value="owned" onClick={onClick}>
              Owned
            </Button>
            <Button data-type="own" data-value="unowned" onClick={onClick}>
              Unowned
            </Button>
          </ButtonGroup>
          <CardList
            dataSource={collection}
            renderItem={item => (
              <Link key={item?.id} href={`/card/${item?.cardDefId}`}>
                <a id={item?.cardDefId}>
                  <div data-selected={!(item as CollectionCard)?.mine}>
                    <Card {...item} />
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

export default InstantProfile;
