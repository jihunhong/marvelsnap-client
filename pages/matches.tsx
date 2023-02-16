import backgroundUrls from '@constant/backgrounds';
import { defaultTitle, siteBaseUrl } from '@constant/text';
import MatchList from '@molecules/MatchList';
import PageIntro from '@molecules/PageIntro';
import useMatches from '@query/useMatches';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const Matches = () => {
  const router = useRouter();
  const [matches] = useMatches();
  return (
    <>
      <NextSeo
        title={`친선전 - ${defaultTitle}`}
        openGraph={{
          url: `${siteBaseUrl}/${router.asPath}`,
          title: `친선전 - ${defaultTitle}`,
        }}
      />
      <PageIntro title="Matches" description="snapsco에서 친선전 상대를 찾아보세요" bgSource={backgroundUrls.cards}></PageIntro>
      <section>
        <MatchList dataSource={matches} />
      </section>
    </>
  );
};

export default Matches;
