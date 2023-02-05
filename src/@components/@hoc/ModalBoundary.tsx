import dynamic from 'next/dynamic';
import { useRecoilValue } from 'recoil';
import { modalAtom } from 'src/@store/modal';

const LoginModal = dynamic(() => import('@molecules/Modal/LoginModal'), {
  ssr: false,
  loading: () => <></>,
});

const ModalBoundary = () => {
  const { login } = useRecoilValue(modalAtom);
  return <>{login ? <LoginModal /> : null}</>;
};

export default ModalBoundary;
