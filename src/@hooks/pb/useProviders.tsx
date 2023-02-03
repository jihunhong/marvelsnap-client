import { Provider } from '@customTypes/Provider';
import { useRouter } from 'next/router';
import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';

const useProviders = () => {
  const [providers, setProviders] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_END_POINT);
    (async () => {
      const authMethods = await pb.collection('users').listAuthMethods();
      setProviders(p => [...authMethods.authProviders]);
    })();
  }, []);

  const onClick = (provider: Provider) => {
    localStorage.setItem('provider', JSON.stringify(provider));
    router.push(provider.authUrl + 'http://localhost:3000/redirect');
  };

  return [providers, onClick];
};

export default useProviders;
