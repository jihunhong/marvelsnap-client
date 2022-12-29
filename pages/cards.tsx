import { NextPage } from 'next';
import CardList from '../src/components/@molecules/CardList';
import dynamic from 'next/dynamic';
import PageIntro from '../src/components/@molecules/PageIntro';
import BreadCrumb from '../src/components/@atoms/BreadCrumb';
import Button from '../src/components/@atoms/Button';
import { FlexRow } from '../src/components/@atoms/Flex/style';
import { GiCardRandom, GiCardPickup } from 'react-icons/gi';
import { useEffect } from 'react';
import DivisionLayout from '../src/components/@layout/BuilderLayout';

const CardFilter = dynamic(() => import('../src/components/@molecules/CardFilter'), {
  ssr: false,
  loading: () => <div>Filter UI Loading</div>,
});

const Cards: NextPage = () => {
  useEffect(() => {
    fetch('http://localhost:3000/api/cards/list')
      .then(res => res.json())
      .then(json => console.log(json))
  }, []);
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
        <CardList />
        <CardFilter />
      </DivisionLayout>
    </>
  );
};

export default Cards;
