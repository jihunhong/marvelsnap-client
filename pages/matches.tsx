import backgroundUrls from '@constant/backgrounds';
import { defaultTitle, siteBaseUrl } from '@constant/text';
import PageIntro from '@molecules/PageIntro';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const Matches = () => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={`친선전 - ${defaultTitle}`}
        openGraph={{
          url: `${siteBaseUrl}/${router.asPath}`,
          title: `친선전 - ${defaultTitle}`,
        }}
      />
      <PageIntro title="Meta" description="강력하고 어썸한 덱들을 확인해보세요!" bgSource={backgroundUrls.cards}></PageIntro>
      <section></section>
    </>
  );
};

export default Matches;
