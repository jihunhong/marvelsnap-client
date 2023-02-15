import { pb } from '@lib/pb';
import { useResetRecoilState } from 'recoil';
import { userAtom } from 'src/@store/user';

const useLogout = () => {
  const resetter = useResetRecoilState(userAtom);
  const onClick = () => {
    pb.authStore.clear();
    resetter();
  };

  return [onClick];
};

export default useLogout;
