import { baseImgix } from '@constant/imigx';
import { getArticle } from '@fetch/index';
import DetailLayout from '@layout/DetailLayout';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import { NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { defaultTitle, siteBaseUrl } from '@constant/text';
import { NextSeo } from 'next-seo';

export async function getServerSideProps(context: NextPageContext) {
  const queryClient = new QueryClient();
  const id = context.query?.id as string;
  await queryClient.prefetchQuery([keys.getArticle, id], () => getArticle(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
const RawHtml = dynamic(() => import('@atoms/RawHtml'), {
  ssr: false,
});

const ArticleDetail = () => {
  const router = useRouter();
  const { data } = useQuery([keys.getArticle, router.query.id], () => getArticle(router.query?.id), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
  return (
    <>
      <NextSeo
        title={`${data?.title} - ${defaultTitle}`}
        openGraph={{
          url: `${siteBaseUrl}/${router.asPath}`,
          title: `${data?.title} - ${defaultTitle}`,
        }}
      />
      <PageIntro title={data?.title} description={data?.summary} bgSource={`${baseImgix}/static/background-card-detail.webp`} objectPosition="center bottom" />
      <DetailLayout>
        <div>
          <RawHtml content={data?.content} />
        </div>
      </DetailLayout>
    </>
  );
};

export default ArticleDetail;
