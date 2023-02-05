import { Provider } from '@customTypes/Provider';
import { baseUrl } from '@fetch/index';
import { useRouter } from 'next/router';
import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';

const useProviders = (): [Array<Provider>, (provider: Provider) => void] => {
  const [providers, setProviders] = useState<Array<Provider>>([]);
  const router = useRouter();
  useEffect(() => {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_END_POINT);
    (async () => {
      const authMethods = await pb.collection('users').listAuthMethods();
      setProviders(() => [...authMethods.authProviders]);
    })();
  }, []);

  const onClick = (provider: Provider) => {
    localStorage.setItem('provider', JSON.stringify(provider));
    sessionStorage.setItem('history_path', router.asPath);
    router.push(provider.authUrl + `${baseUrl}/redirect`);
  };

  return [providers, onClick];
};

export default useProviders;
