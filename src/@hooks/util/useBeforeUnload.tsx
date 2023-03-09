import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useBeforeUnload = () => {
  const router = useRouter();
  useEffect(() => {
    let confirmMsg = `사이트에서 나가시겠습니까?\n변경사항이 저장되지 않을 수 있습니다.`;
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      (e || window.event).returnValue = confirmMsg;
      return confirmMsg; // Gecko + Webkit, Safari, Chrome
    };

    const handleBeforeChangeRoute = (url: string) => {
      if (url.includes('/deck') && router.pathname === '/editor') {
        confirmMsg = `작성된 내용으로 저장하시겠습니까?`;
      }
      if (router.pathname !== url && !confirm(confirmMsg)) {
        router.events.emit('routeChangeError');
        throw `사이트 변경 취소`;
      }
    };
    if (router.asPath !== window.location.pathname) {
      window.history.pushState('', '', router.asPath);
    }
    window.addEventListener('beforeunload', handleBeforeUnload);
    router.events.on('routeChangeStart', handleBeforeChangeRoute);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      router.events.off('routeChangeStart', handleBeforeChangeRoute);
    };
  }, []);
};

export default useBeforeUnload;
