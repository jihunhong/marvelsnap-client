import CardImage from '@atoms/CardImage';
import { baseImgix } from '@constant/imigx';
import { cardTitleSuffix, siteBaseUrl } from '@constant/text';
import CardDetail from '@molecules/CardDetail';
import CommentInput from '@molecules/CommentInput';
import Comments from '@molecules/Comments';
import Variants from '@molecules/Variants';
import useCardQuery from '@query/useCardQuery';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import * as S from './style';
import useScoreList from '@query/useScoreList';
import Head from 'next/head';
import useCommentListQuery from '@query/useCommentList';

const CardDetailTemplate = () => {
  const [data] = useCardQuery();
  const router = useRouter();
  const { avg, ratings } = useScoreList({ collectionId: data?.collectionId, recordId: data?.id });
  const { dataSource } = useCommentListQuery({ collectionId: data?.collectionId, recordId: data?.id });

  return (
    <>
      <NextSeo
        title={`${data?.name} | SNAPSCO`}
        description={`${data?.name} - ${data?.effect}`}
        openGraph={{
          url: `${siteBaseUrl}${router.asPath}`,
          title: `${data?.name} | SNAPSCO`,
          description: `${data?.name} - ${data?.effect}`,
          images: [
            {
              url: `${baseImgix}/cards/basic/${data?.cardDefId}.webp`,
            },
          ],
        }}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
        {
          "@context": "https://schema.org/",
          "@type": "UserReview",
          "name": "${data?.name}",
          "image": "https://${baseImgix}/cards/basic/${data?.cardDefId}.webp?format=auto",
          "description": "${data?.name} - ${data?.effect}",
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "${avg}",
              "bestRating": "5"
            },
          },
          "commentCount": "${dataSource?.length}",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "${avg}",
            "reviewCount": "${dataSource?.length}"
          },
        }
    `,
          }}
        ></script>
      </Head>
      <S.CardDetailContainer>
        <div className="meta">
          <section>
            <CardImage cardDefId={data?.cardDefId} w={357} />
          </section>
          <section className="meta">
            <CardDetail {...data} />
            <Variants cardDefId={data?.cardDefId} dataSource={data?.expand?.variants} />
          </section>
        </div>
        <CommentInput {...data} />
        <Comments {...data} />
      </S.CardDetailContainer>
    </>
  );
};

export default CardDetailTemplate;
