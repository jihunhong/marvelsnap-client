import ArticleTemplate from '@components/@template/article';
import { baseImgix } from '@constant/imigx';
import { defaultTitle, siteBaseUrl } from '@constant/text';
import { getArticle } from '@fetch/index';
import DetailLayout from '@layout/DetailLayout';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import { NextPageContext } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from 'react-query';

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
        title={`${data?.title} | SNAPSCO`}
        openGraph={{
          url: `${siteBaseUrl}/${router.asPath}`,
          title: `${data?.title}`,
        }}
      />
      <PageIntro title={data?.title} description={data?.summary} bgSource={`${baseImgix}/static/background-card-detail.webp`} objectPosition="center bottom" />
      <DetailLayout>
        <ArticleTemplate data={data} />
      </DetailLayout>
    </>
  );
};

export default ArticleDetail;
