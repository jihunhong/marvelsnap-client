import { FlexRow } from '@atoms/Flex/style';
import DeckDetailTemplate from '@components/@template/deck/[deckId]';
import backgroundUrls from '@constant/backgrounds';
import { getDeckApi } from '@fetch/index';
import DetailLayout from '@layout/DetailLayout';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import { NextPageContext } from 'next';
import { dehydrate, QueryClient } from 'react-query';

export async function getServerSideProps(context: NextPageContext) {
  const queryClient = new QueryClient();
  const id = context.query?.deckId as string;
  await queryClient.prefetchQuery([keys.getDeck, id], () => getDeckApi(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const DeckDetail = () => {
  return (
    <>
      <PageIntro title={'Deck'} description={''} bgSource={backgroundUrls.cards} objectPosition="center bottom" />
      <DetailLayout>
        <FlexRow></FlexRow>
        <DeckDetailTemplate />
      </DetailLayout>
    </>
  );
};

export default DeckDetail;
