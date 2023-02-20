import Button from '@atoms/Button';
import ButtonGroup from '@atoms/ButtonGroup';
import Card from '@atoms/Card';
import backgroundUrls from '@constant/backgrounds';
import { CollectionCard } from '@customTypes/CollectionCard';
import { getUsersCollectionApi } from '@fetch/index';
import useCollectionFilter from '@hooks/useCollectionFilter';
import DivisionLayout from '@layout/DivisionLayout';
import CardList from '@molecules/CardList';
import CollectionFilter from '@molecules/ColletionFilter';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import useUserCollection from '@query/useUserCollection';
import { NextPageContext } from 'next';
import Link from 'next/link';
import { dehydrate, QueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'src/@store/user';

export async function getServerSideProps(context: NextPageContext) {
  const queryClient = new QueryClient();
  const id = context.query.id as string;
  await queryClient.prefetchQuery([keys.getCollectionList], () => getUsersCollectionApi(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Collection = () => {
  const { collection } = useUserCollection();
  const [onClick] = useCollectionFilter();
  const user = useRecoilValue(userAtom);
  return (
    <>
      <PageIntro title="Collection" description={`${user?.username}님의 컬렉션`} bgSource={backgroundUrls.profileCollection} />
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
              <div key={item.id} data-selected={!(item as CollectionCard)?.mine}>
                <Card {...item} />
              </div>
            )}
          />
        </section>
        <CollectionFilter />
      </DivisionLayout>
    </>
  );
};

export default Collection;
