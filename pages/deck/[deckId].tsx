import { FlexRow } from '@atoms/Flex/style';
import DeckDetailTemplate from '@components/@template/deck/[deckId]';
import collections from '@constant/collections';
import { baseImgix } from '@constant/imigx';
import { getCommentApi, getDeckApi, getLikeApi } from '@fetch/index';
import AppLayout from '@layout/AppLayout';
import DetailLayout from '@layout/DetailLayout';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import { NextPageContext } from 'next';
import { ReactElement } from 'react';
import { dehydrate, QueryClient } from 'react-query';

export async function getServerSideProps(context: NextPageContext) {
  const queryClient = new QueryClient();
  const id = context.query?.deckId as string;
  await queryClient.prefetchQuery([keys.getDeck, id], () => getDeckApi(id));
  await queryClient.prefetchQuery([keys.getCommentList, collections.deck, id], () => getLikeApi({ collectionId: collections.deck, recordId: id }));
  await queryClient.fetchQuery([keys.getLike, collections.deck, id], () => getCommentApi({ collectionId: collections.deck, recordId: id, page: 1 }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const DeckDetail = () => {
  return (
    <>
      <DetailLayout>
        <PageIntro title={'Deck'} description={''} bgSource={`${baseImgix}/static/background-card-detail.webp`}>
          <FlexRow></FlexRow>
        </PageIntro>
        <DeckDetailTemplate />
      </DetailLayout>
    </>
  );
};

DeckDetail.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;
export default DeckDetail;
