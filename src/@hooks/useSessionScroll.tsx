import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useSessionScroll = ({ targetUrl = '/', key = '' }: { targetUrl: string; key: string }) => {
  const router = useRouter();
  useEffect(() => {
    const handleChangeStart = (url: string) => {
      if (url.startsWith(targetUrl)) {
        /** targetUrl로 시작하는 페이지 접근시에만 세션에 스크롤 위치 저장 */
        sessionStorage.setItem(key, String(window.scrollY));
      }
    };
    const handleBeforeUnload = () => {
      /** BeforeUnload 시점에 삭제 */
      sessionStorage.removeItem(key);
    };

    const handleScroll = () => {
      if (sessionStorage.getItem(key)) {
        const y = Number(sessionStorage.getItem(key));
        window?.scroll({
          top: y,
          behavior: 'auto',
        });
      }
    };
    router.events.on('routeChangeComplete', handleScroll);
    router.events.on('routeChangeStart', handleChangeStart);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      router.events.off('routeChangeComplete', handleScroll);
      router.events.off('routeChangeStart', handleChangeStart);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [router]);
};

export default useSessionScroll;
