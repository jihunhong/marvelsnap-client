import { FlexRow } from '@atoms/Flex/style';
import { baseImgix } from '@constant/imigx';
import { getCardApi } from '@fetch/index';
import DetailLayout from '@layout/DetailLayout';
import CardDetail from '@molecules/CardDetail';
import CommentInput from '@molecules/CommentInput';
import Comments from '@molecules/Comments';
import PageIntro from '@molecules/PageIntro';
import Variants from '@molecules/Variants';
import keys from '@query/keys';
import useCardQuery from '@query/useCardQuery';
import { NextPage, NextPageContext } from 'next';
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

const Detail: NextPage = props => {
  const [data] = useCardQuery();
  return (
    <>
      <DetailLayout>
        <PageIntro title={data?.en} description={''} bgSource={`${baseImgix}/static/background-card-detail.webp`}>
          <FlexRow></FlexRow>
        </PageIntro>
        <section className="card-info">
          <div>
            <section>
              <img width={357} height={480} src={`${baseImgix}/cards/basic/${data?.en?.toLowerCase().replaceAll(' ', '-')}.webp?w=480&h=480&trim=auto`} alt={data?.name} />
            </section>
            <section className="meta">
              <CardDetail {...data} />
              <Variants cardDefId={data?.cardDefId} dataSource={data?.expand?.variants} />
            </section>
          </div>
        </section>
        <CommentInput {...data} />
        <Comments {...data} />
      </DetailLayout>
    </>
  );
};

export default Detail;
