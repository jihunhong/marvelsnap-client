import LoginToast from '@atoms/Toast/Login';
import { pb } from '@lib/pb';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useResetRecoilState } from 'recoil';
import { userAtom } from 'src/@store/user';

/**
 * @description 특정 행동에 에러가 날 경우에 표시해주는 noti
 * @example 덱을 12장이아닌 상태로 제출하거나, 같은 카드를 덱에 추가하려는 행위
 */
const useBlockNotify = () => {
  const router = useRouter();
  const resetter = useResetRecoilState(userAtom);
  const blockDeckAmount = () => toast.warn('덱은 12장의 카드로 구성해야 합니다');
  const blockDuplicateCard = () => toast.warn('이미 추가한 카드입니다');
  const blockEmptyTitle = () => toast.warn('덱 이름을 추가해주세요');
  const expiredSession = () => {
    toast.error(
      <div>
        <p>세션이 만료되었습니다.</p>
        <span>다시 로그인해주세요.</span>
      </div>,
    );
    pb.authStore.clear();
    resetter();
    router.push('/login');
  };
  const loginAccessNotify = () =>
    toast(<LoginToast />, {
      position: 'bottom-right',
      autoClose: 8000,
      pauseOnHover: true,
      closeOnClick: false,
    });

  return {
    blockDeckAmount,
    blockDuplicateCard,
    blockEmptyTitle,
    loginAccessNotify,
    expiredSession,
  };
};

export default useBlockNotify;
