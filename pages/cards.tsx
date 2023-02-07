import Button from '@atoms/Button';
import Card from '@atoms/Card';
import { FlexRow } from '@atoms/Flex/style';
import backgroundUrls from '@constant/intro-background';
import { defaultTitle, siteBaseUrl } from '@constant/text';
import { getCardListApi } from '@fetch/index';
import useCardNavigate from '@hooks/action/useCardNavigate';
import useNotify from '@hooks/notify/useNotify';
import useMobileCheck from '@hooks/useMobileCheck';
import AppLayout from '@layout/AppLayout';
import DivisionLayout from '@layout/DivisionLayout';
import CardList from '@molecules/CardList';
import CardDetailModal from '@molecules/Modal/CardDetailModal';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import useCardListQuery from '@query/useCardListQuery';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import { GiCardPickup, GiCardRandom } from 'react-icons/gi';
import { dehydrate, QueryClient } from 'react-query';

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
  const [isMobile] = useMobileCheck();
  const notify = useNotify();
  useEffect(() => {
    if (isMobile) notify.responsiveWarn();
  }, [isMobile]);

  return (
    <>
      <NextSeo
        title={`카드 리스트, 카드 갤러리, 카드 DB - ${defaultTitle}`}
        openGraph={{
          url: `${siteBaseUrl}/${router.asPath}`,
          title: `카드 리스트, 카드 갤러리, 카드 DB - ${defaultTitle}`,
        }}
      />
      <PageIntro title="Cards" description="게임에서 사용되는 다양한 카드들을 찾아보세요" bgSource={backgroundUrls.cards}>
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
          {!!router.query.id ? <CardDetailModal visible={!!router.query.id} /> : null}
          <CardList
            dataSource={dataSource}
            renderItem={item => (
              <Link key={item?.id} href={`/cards?id=${item?.cardDefId}`} as={`/card/${item?.cardDefId}`} scroll={false} shallow={true}>
                <a id={item?.cardDefId}>
                  <Card {...item} w={116} />
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
