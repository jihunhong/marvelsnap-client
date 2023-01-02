import useCardList from '@hooks/queries/useCardList';
import keys from '@query/keys';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { GiCardPickup, GiCardRandom } from 'react-icons/gi';
import { dehydrate, QueryClient } from 'react-query';
import Button from 'src/@components/@atoms/Button';
import { FlexRow } from 'src/@components/@atoms/Flex/style';
import DivisionLayout from 'src/@components/@layout/DivisionLayout';
import CardList from 'src/@components/@molecules/CardList';
import PageIntro from 'src/@components/@molecules/PageIntro';
import { fetchCardList } from 'src/@fetch';

const CardFilter = dynamic(() => import('@molecules/CardFilter'), {
  ssr: false,
  loading: () => <div>Filter UI Loading</div>,
});

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([keys.cardList, null], fetchCardList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

const Cards: NextPage = (props) => {
  
  const [{ data }, onClick] = useCardList();

  return (
    <>
      <PageIntro
        title="Cards"
        description="게임에서 사용되는 다양한 카드들을 찾아보세요"
        bgSource="https://assets-prd.ignimgs.com/2022/05/18/multiplecard-showcase-d1-v2-1652904981819.png"
      >
        <FlexRow>
          <Button icon={<GiCardRandom />}>
            <span>랜덤 카드</span>
          </Button>
          <Button icon={<GiCardPickup />} colorType="secondary">
            <span>오늘의 카드</span>
          </Button>
        </FlexRow>
      </PageIntro>
      <DivisionLayout>
        <CardList dataSource={data} />
        <CardFilter onClick={onClick} />
      </DivisionLayout>
    </>
  );
};

export default Cards;
