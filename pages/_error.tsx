import ErrorTemplate from '@components/@template/_error';
import { baseImgix } from '@constant/imigx';
import AppLayout from '@layout/AppLayout';
import PageIntro from '@molecules/PageIntro';
import { NextPageContext } from 'next';
import Head from 'next/head';
import { ReactElement } from 'react';

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

Error.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;

export default Error;
