import { Provider } from '@customTypes/Provider';
import { baseUrl } from '@fetch/index';
import { useRouter } from 'next/router';
import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';

const useProviders = (): [Array<Provider>, (provider: Provider) => void] => {
  const [providers, setProviders] = useState<Array<Provider>>([]);
  const router = useRouter();
  useEffect(() => {
    if (!providers.length) {
      const pb = new PocketBase(process.env.NEXT_PUBLIC_END_POINT);
      (async () => {
        const authMethods = await pb.collection('users').listAuthMethods();
        setProviders(() => [...authMethods.authProviders]);
      })();
    }
  }, [providers]);

  const onClick = (provider: Provider) => {
    localStorage.setItem('provider', JSON.stringify(provider));
    const history_path = router.asPath;
    sessionStorage.setItem('history_path', history_path === '/login' ? '/' : history_path);
    router.push(provider.authUrl + `${baseUrl}/redirect`);
  };

  return [providers, onClick];
};

export default useProviders;
