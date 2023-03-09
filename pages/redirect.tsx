import useAuthenticate from '@hooks/pb/useAuthenticate';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

const Redirect = () => {
  useAuthenticate();
  return (
    <>
      <NextSeo noindex={true} nofollow={true} />
      Redirecting...
    </>
  );
};

export default dynamic(() => Promise.resolve(Redirect), {
  ssr: false,
});
