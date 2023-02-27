import { defaultTitle, siteBaseUrl } from '@constant/text';
import PageIntro from '@molecules/PageIntro';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import backgroundUrls from '@constant/backgrounds';
import DownloadTemplate from '@components/@template/download';

const Download = () => {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title={`컬렉션 트래커 다운로드 | SNAPSCO`}
        openGraph={{
          url: `${siteBaseUrl}/${router.asPath}`,
          title: `컬렉션 트래커 다운로드 | SNAPSCO`,
        }}
      />
      <PageIntro title="Download" description="트래커로 컬렉션을 연동시켜 보세요" bgSource={backgroundUrls.cards} />
      <section>
        <DownloadTemplate />
      </section>
    </>
  );
};

export default Download;
