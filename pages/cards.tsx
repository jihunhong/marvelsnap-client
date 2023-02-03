import Button from '@atoms/Button';
import Card from '@atoms/Card';
import { FlexRow } from '@atoms/Flex/style';
import { getCardApi, getCardListApi } from '@fetch/index';
import useCardNavigate from '@hooks/action/useCardNavigate';
import AppLayout from '@layout/AppLayout';
import DivisionLayout from '@layout/DivisionLayout';
import CardList from '@molecules/CardList';
import CardDetailModal from '@molecules/Modal/CardDetailModal';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import useCardListQuery from '@query/useCardListQuery';
import useCardQuery from '@query/useCardQuery';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, SyntheticEvent } from 'react';
import { GiCardPickup, GiCardRandom } from 'react-icons/gi';
import { dehydrate, QueryClient, useQueryClient } from 'react-query';

const CardFilter = dynamic(() => import('@molecules/CardFilter'), {
  ssr: false,
  loading: () => <div>Filter UI Loading</div>,
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

const Cards = () => {
  const [dataSource] = useCardListQuery();
  const { daily, random } = useCardNavigate();
  const router = useRouter();

  return (
    <>
      <PageIntro title="Cards" description="게임에서 사용되는 다양한 카드들을 찾아보세요" bgSource="https://assets-prd.ignimgs.com/2022/05/18/multiplecard-showcase-d1-v2-1652904981819.png">
        <FlexRow>
          <Button icon={<GiCardRandom />} onClick={random}>
            <span>랜덤 카드</span>
          </Button>
          <Button icon={<GiCardPickup />} colorType="secondary" onClick={daily}>
            <span>오늘의 카드</span>
          </Button>
        </FlexRow>
      </PageIntro>
      <DivisionLayout>
        <section>
          <CardDetailModal visible={!!router.query.id} />
          <CardList
            dataSource={dataSource}
            renderItem={item => (
              <Link key={item?.id} href={`/cards?id=${item?.cardDefId}`} as={`/card/${item?.cardDefId}`} scroll={false} shallow={true}>
                <a id={item?.cardDefId}>
                  <Card {...item} w={116} h={148} />
                </a>
              </Link>
            )}
          />
        </section>
        <CardFilter />
      </DivisionLayout>
    </>
  );
};

Cards.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;
export default Cards;
