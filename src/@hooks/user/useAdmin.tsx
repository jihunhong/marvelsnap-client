import { baseUrl } from '@fetch/index';
import useToggle from '@hooks/useToggle';
import { pb } from '@lib/pb';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useAdmin = () => {
  const [admin, handler] = useToggle();
  const router = useRouter();
  useEffect(() => {
    const adminLogin = async () => {
      const pw = prompt('Welcom back!');
      try {
        await pb.collection('users').authRefresh();
      } catch (err) {
        alert('세션이 만료되었습니다.');
        router.push('/login');
      }
      try {
        await axios.post(
          `${baseUrl}/api/admin/login`,
          {
            pw,
          },
          {
            headers: {
              authorization: JSON.parse(localStorage.getItem('pocketbase_auth') || '{}')?.token,
            },
          },
        );
        handler();
      } catch (err) {
        console.log(err);
        debugger;
        // router.push('/');
      }
    };
    adminLogin();
  }, []);

  return [admin];
};

export default useAdmin;
