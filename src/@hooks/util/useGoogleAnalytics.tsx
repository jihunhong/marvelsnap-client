import { useEffect } from 'react';
import { pageView } from '@lib/gtag';
import { useRouter } from 'next/router';

const useGoogleAnalytics = () => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};

export default useGoogleAnalytics;
