import { Provider } from '@customTypes/Provider';
import { baseUrl } from '@fetch/index';
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
    const pb = new PocketBase(process.env.NEXT_PUBLIC_END_POINT);
    const provider: Provider = JSON.parse(localStorage.getItem('provider')!);
    if (provider.state !== params.get('state')) {
      throw "State parameters don't match.";
    }

    pb.collection('users')
      .authWithOAuth2(provider.name, params.get('code'), provider.codeVerifier, `${baseUrl}/redirect`)
      .then(response => {
        pb.collection('users').update(response.record.id, {
          name: response.meta.name,
          avatarUrl: response.meta.avatarUrl,
        });
        queryClient.setQueryData('user', pb.authStore.baseModel);

        const beforeLoginPath = sessionStorage.getItem('history_path');
        router.push(beforeLoginPath || '/');
      })
      .catch(err => {
        debugger;
        console.error(err);
        notify.loginError();
        localStorage.removeItem('provider');
        localStorage.removeItem('pocketbase_auth');
        const beforeLoginPath = sessionStorage.getItem('history_path');
        router.push(beforeLoginPath || '/');
      });
  }, []);

  return [];
};

export default useAuthenticate;
