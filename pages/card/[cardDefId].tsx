import { FlexRow } from '@atoms/Flex/style';
import CardDetailTemplate from '@components/@template/card/[cardDefId]';
import { baseImgix } from '@constant/imigx';
import { getCardApi } from '@fetch/index';
import AppLayout from '@layout/AppLayout';
import DetailLayout from '@layout/DetailLayout';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import useCardQuery from '@query/useCardQuery';
import { NextPageContext } from 'next';
import { ReactElement } from 'react';
import { dehydrate, QueryClient } from 'react-query';

export async function getServerSideProps(context: NextPageContext) {
  const queryClient = new QueryClient();
  const id = context.query?.cardDefId as string;
  await queryClient.prefetchQuery([keys.getCard, id], () => getCardApi(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Detail = () => {
  const [data] = useCardQuery();
  return (
    <>
      <PageIntro title={data?.en} description={''} bgSource={`${baseImgix}/static/background-card-detail.webp`} objectPosition="center center" />
      <DetailLayout>
        <FlexRow></FlexRow>
        <CardDetailTemplate />
      </DetailLayout>
    </>
  );
};

Detail.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;
export default Detail;
