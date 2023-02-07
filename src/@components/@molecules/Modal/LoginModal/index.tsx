import LoginTemplate from '@components/@template/login';
import useModalControl from '@hooks/modal/useModalControl';
import { BsX } from 'react-icons/bs';
import * as S from './style';

const LoginModal = () => {
  const { ref, close } = useModalControl('login');
  useModalControl('login');
  return (
    <S.LoginModalContainer ref={ref}>
      <div className="header">
        <BsX className="closer" color={'#fff'} size={34} onClick={close} />
      </div>
      <LoginTemplate />
    </S.LoginModalContainer>
  );
};

export default LoginModal;
