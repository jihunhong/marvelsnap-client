import useCardList from '@hooks/queries/useCardList';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { GiCardPickup, GiCardRandom } from 'react-icons/gi';
import Button from 'src/@components/@atoms/Button';
import { FlexRow } from 'src/@components/@atoms/Flex/style';
import DivisionLayout from 'src/@components/@layout/DivisionLayout';
import CardList from 'src/@components/@molecules/CardList';
import PageIntro from 'src/@components/@molecules/PageIntro';

const CardFilter = dynamic(() => import('src/@components/@molecules/CardFilter'), {
  ssr: false,
  loading: () => <div>Filter UI Loading</div>,
});

const Cards: NextPage = () => {
  const { data } = useCardList();
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
        <CardFilter />
      </DivisionLayout>
    </>
  );
};

export default Cards;
