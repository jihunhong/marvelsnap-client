import { FlexRow } from '@atoms/Flex/style';
import collections from '@constant/collections';
import { baseImgix } from '@constant/imigx';
import { getCommentApi, getDeckApi, getLikeApi } from '@fetch/index';
import useDeckPaste from '@hooks/action/useDeckPaste';
import useCopyCode from '@hooks/deck/useDeckCode';
import useDeckCode from '@hooks/deck/useDeckCode';
import AppLayout from '@layout/AppLayout';
import DetailLayout from '@layout/DetailLayout';
import CardGrid from '@molecules/CardGrid';
import CommentInput from '@molecules/CommentInput';
import Comments from '@molecules/Comments';
import DeckCode from '@molecules/DeckCode';
import PageIntro from '@molecules/PageIntro';
import Recommend from '@molecules/Recommend';
import keys from '@query/keys';
import useDeckInfoQuery from '@query/useDeckInfo';
import { NextPageContext } from 'next';
import dynamic from 'next/dynamic';
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

const RawHtml = dynamic(() => import('@atoms/RawHtml'), {
  ssr: false,
});

const DeckDetail = () => {
  const [data] = useDeckInfoQuery();
  const [handler, encoded] = useCopyCode({ title: data?.title, items: data?.expand?.items });
  return (
    <>
      <DetailLayout>
        <PageIntro title={'Deck'} description={''} bgSource={`${baseImgix}/static/background-card-detail.webp`}>
          <FlexRow></FlexRow>
        </PageIntro>
        <section className="deck-info">
          <CardGrid {...data} />
          <section className="meta"></section>
        </section>
        <section className="description">
          <RawHtml content={data?.description} />
        </section>
        <section className="actions">
          <DeckCode placeholder="" value={encoded} onClick={handler} />
          <Recommend {...data} />
        </section>
        <CommentInput {...data} />
        <Comments {...data} />
      </DetailLayout>
    </>
  );
};

DeckDetail.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;
export default DeckDetail;
