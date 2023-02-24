import useAuthenticate from '@hooks/pb/useAuthenticate';
import dynamic from 'next/dynamic';
import Head from 'next/head';

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

export default dynamic(() => Promise.resolve(Redirect), {
  ssr: false,
});
