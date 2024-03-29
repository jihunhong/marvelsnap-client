import Button from '@atoms/Button';
import Card from '@atoms/Card';
import { FlexRow } from '@atoms/Flex/style';
import backgroundUrls from '@constant/backgrounds';
import { siteBaseUrl } from '@constant/text';
import { getCardListApi } from '@fetch/index';
import useCardNavigate from '@hooks/action/useCardNavigate';
import DivisionLayout from '@layout/DivisionLayout';
import CardList from '@molecules/CardList';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import useCardListQuery from '@query/useCardListQuery';
import { NextPageContext } from 'next';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';

const CardFilter = dynamic(() => import('@molecules/CardFilter'), {
  ssr: false,
});

const CardDetailModal = dynamic(() => import('@molecules/Modal/CardDetailModal'), {
  ssr: false,
});

export async function getStaticProps({ res }: NextPageContext) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([keys.getCardList], getCardListApi);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 31536000,
    },
  };
}

const Cards = () => {
  const [dataSource] = useCardListQuery();
  const { daily, random } = useCardNavigate();
  const router = useRouter();
  return (
    <>
      <NextSeo
        title={`마블스냅 카드 리스트, 카드 갤러리, 카드 DB | SNAPSCO`}
        openGraph={{
          url: `${siteBaseUrl}/${router.asPath}`,
          title: `마블스냅 카드 리스트, 카드 갤러리, 카드 DB | SNAPSCO`,
        }}
      />
      <PageIntro title="Cards" description="게임에서 사용되는 다양한 카드들을 찾아보세요" bgSource={backgroundUrls.cards}>
        <FlexRow>
          <Button onClick={random}>
            <span>랜덤 카드</span>
          </Button>
          <Button colorType="secondary" onClick={daily}>
            <span>오늘의 카드</span>
          </Button>
        </FlexRow>
      </PageIntro>
      <DivisionLayout>
        <section>
          {!!router.query.id ? <CardDetailModal visible={!!router.query.id} /> : null}
          <CardList
            dataSource={dataSource}
            renderItem={item => (
              <Link key={item?.id} href={`/cards?id=${item?.cardDefId}`} as={`/card/${item?.cardDefId}`} scroll={false} shallow={true}>
                <a id={item?.cardDefId}>
                  <Card {...item} />
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

export default Cards;
