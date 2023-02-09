import ErrorTemplate from '@components/@template/_error';
import { baseImgix } from '@constant/imigx';
import PageIntro from '@molecules/PageIntro';
import { NextPageContext } from 'next';
import Head from 'next/head';

const Error = ({ statusCode }: { statusCode: number }) => {
  return (
    <>
      <Head>
        <meta name="Robots" content="noindex,nofollow" />
      </Head>
      <PageIntro title="Oops!" description="잘못된 페이지입니다!" bgSource={`${baseImgix}/static/error-page-intro-header.webp`} />
      <ErrorTemplate statusCode={statusCode} />
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
