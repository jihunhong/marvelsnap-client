import { FlexColumn } from '@atoms/Flex/style';
import useModalToggler from '@hooks/modal/useModalToggler';
import { FcGoogle } from 'react-icons/fc';
import * as S from './style';

const LoginToast = () => {
  const [handler] = useModalToggler('login');
  return (
    <>
      <S.LoginToastContainer onClick={handler}>
        <FcGoogle size={30} />
        <FlexColumn>
          <p>로그인이 필요한 기능입니다</p>
          <span>구글 계정을 이용해 바로 이용 할 수 있습니다.</span>
        </FlexColumn>
      </S.LoginToastContainer>
    </>
  );
};

export default LoginToast;
