import Pages from '@atoms/Pages';
import backgroundUrls from '@constant/backgrounds';
import { siteBaseUrl } from '@constant/text';
import { getMetaDeckListApi } from '@fetch/index';
import MetaDeckList from '@molecules/MetaDeckList';
import MetaDeckDetailModal from '@molecules/Modal/MetaDeckDetailModal';
import PageIntro from '@molecules/PageIntro';
import keys from '@query/keys';
import { NextPageContext } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from 'react-query';

export async function getServerSideProps(context: NextPageContext) {
  const queryClient = new QueryClient();
  const page = context.query.page || 1;
  await queryClient.prefetchQuery([keys.getMetaDeckList, page], () => getMetaDeckListApi(Number(page)));
  context.res!.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=86400');
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

const Meta = () => {
  const router = useRouter();
  const page = router?.query?.page || 1;
  const { data } = useQuery([keys.getMetaDeckList, page], () => getMetaDeckListApi(Number(page)), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  return (
    <>
      <NextSeo
        title={`마블스냅 메타 덱 리스트 | SNAPSCO`}
        openGraph={{
          url: `${siteBaseUrl}/${router.asPath}`,
          title: `마블스냅 메타 덱 리스트 | SNAPSCO`,
        }}
      />
      <PageIntro title="Meta" description="강력하고 어썸한 덱들을 확인해보세요!" bgSource={backgroundUrls.cards}></PageIntro>
      <section>
        {!!router.query.id ? <MetaDeckDetailModal visible={!!router.query.id} /> : null}
        <MetaDeckList dataSource={data?.items} />
        <Pages totalPages={data?.totalPages} pathname="/meta" />
      </section>
    </>
  );
};

export default Meta;
