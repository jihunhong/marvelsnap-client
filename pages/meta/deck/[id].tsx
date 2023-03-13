import { FlexRow } from '@atoms/Flex/style';
import MetaDeckDetailTemplate from '@components/@template/meta/deck/[deckId]';
import backgroundUrls from '@constant/backgrounds';
import { getMetaDeckApi } from '@fetch/index';
import DetailLayout from '@layout/DetailLayout';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import { NextPageContext } from 'next';
import { dehydrate, QueryClient } from 'react-query';

export async function getServerSideProps(context: NextPageContext) {
  const queryClient = new QueryClient();
  const id = context.query?.id as string;
  await queryClient.prefetchQuery([keys.getMetaDeck, id], () => getMetaDeckApi(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const MetaDeckDetail = () => {
  return (
    <>
      <PageIntro title={'Meta Deck'} description={''} bgSource={backgroundUrls.cards} objectPosition="center bottom" />
      <DetailLayout>
        <FlexRow></FlexRow>
        <MetaDeckDetailTemplate />
      </DetailLayout>
    </>
  );
};

export default MetaDeckDetail;
