import { FlexRow } from '@atoms/Flex/style';
import CardDetailTemplate from '@components/@template/card/[cardDefId]';
import backgroundUrls from '@constant/backgrounds';
import { getCardApi } from '@fetch/index';
import DetailLayout from '@layout/DetailLayout';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import useCardQuery from '@query/useCardQuery';
import { NextPageContext } from 'next';
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
      <PageIntro title={data?.en} description={''} bgSource={backgroundUrls.cards} objectPosition="center center" />
      <DetailLayout>
        <FlexRow></FlexRow>
        <CardDetailTemplate />
      </DetailLayout>
    </>
  );
};

export default Detail;
