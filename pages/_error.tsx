import ErrorTemplate from '@components/@template/_error';
import { baseImgix } from '@constant/imigx';
import PageIntro from '@molecules/PageIntro';
import * as Sentry from '@sentry/nextjs';
import { NextPageContext } from 'next';
import { NextSeo } from 'next-seo';
import NextErrorComponent from 'next/error';

const Error = ({ statusCode }: { statusCode: number }) => {
  return (
    <>
      <NextSeo noindex={true} nofollow={true} />
      <PageIntro title="Oops!" description="잘못된 페이지입니다!" bgSource={`${baseImgix}/static/error-page-intro-header.webp`} />
      <ErrorTemplate statusCode={statusCode} />
    </>
  );
};

Error.getInitialProps = async (context: NextPageContext) => {
  await Sentry.captureUnderscoreErrorException(context);
  return NextErrorComponent.getInitialProps(context);
};

export default Error;
