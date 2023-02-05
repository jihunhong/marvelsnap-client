import LoginTemplate from '@components/@template/login';
import useModalControl from '@hooks/modal/useModalControl';
import { useRef } from 'react';
import * as S from './style';

const LoginModal = () => {
  const { ref, close } = useModalControl('login');
  useModalControl('login');
  return (
    <S.LoginModalContainer ref={ref}>
      <LoginTemplate />
    </S.LoginModalContainer>
  );
};

export default LoginModal;
