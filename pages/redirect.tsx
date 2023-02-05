import useAuthenticate from '@hooks/pb/useAuthenticate';
import AppLayout from '@layout/AppLayout';
import Head from 'next/head';
import { ReactElement } from 'react';

const Redirect = () => {
  useAuthenticate();
  return (
    <>
      <Head>
        <meta name="Robots" content="noindex,nofollow" />
      </Head>
      Redirecting...
    </>
  );
};

Redirect.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;
export default Redirect;
