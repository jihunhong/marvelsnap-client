import { Provider } from '@customTypes/Provider';
import useApiNotify from '@hooks/notify/useApiNotify';
import { useRouter } from 'next/router';
import PocketBase from 'pocketbase';
import { useEffect } from 'react';
import { useQueryClient } from 'react-query';

const useAuthenticate = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const notify = useApiNotify();
  useEffect(() => {
    const params = new URL(window.location).searchParams;
    const pb = new PocketBase('http://127.0.0.1:8090');
    const provider: Provider = JSON.parse(localStorage.getItem('provider')!);
    if (provider.state !== params.get('state')) {
      throw "State parameters don't match.";
    }

    pb.collection('users')
      .authWithOAuth2(provider.name, params.get('code'), provider.codeVerifier, 'http://localhost:3000/redirect')
      .then(response => {
        console.log('authentication data === ', response);
        pb.collection('users').update(response.record.id, {
          name: response.meta.name,
          avatarUrl: response.meta.avatarUrl,
        });
        queryClient.setQueryData('user', pb.authStore.baseModel);
        router.push('/');
      })
      .catch(() => {
        notify.loginError();
        localStorage.removeItem('provider');
        router.push('/');
      });
  }, []);

  return [];
};

export default useAuthenticate;
