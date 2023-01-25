import { FlexRow } from '@atoms/Flex/style';
import { baseImgix } from '@constant/imigx';
import { getDeckApi } from '@fetch/index';
import DetailLayout from '@layout/DetailLayout';
import CardGrid from '@molecules/CardGrid';
import CommentInput from '@molecules/CommentInput';
import Comments from '@molecules/Comments';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import useDeckInfoQuery from '@query/useDeckInfo';
import { NextPage, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
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

const RawHtml = dynamic(() => import('@atoms/RawHtml'), {
  ssr: false,
});

const DeckDetail: NextPage = props => {
  const [data] = useDeckInfoQuery();
  return (
    <>
      <DetailLayout>
        <PageIntro title={data?.title} description={''} bgSource={`${baseImgix}/static/background-card-detail.webp`}>
          <FlexRow></FlexRow>
        </PageIntro>
        <section className="deck-info">
          <CardGrid {...data} />
          <section className="meta"></section>
        </section>
        <section className="description">
          <RawHtml content={data?.description} />
        </section>
        <CommentInput {...data} />
        <Comments {...data} />
      </DetailLayout>
    </>
  );
};

export default DeckDetail;
