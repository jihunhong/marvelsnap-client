import * as S from './style';
import { FcGoogle } from 'react-icons/fc';

const GoogleBtn = (...props: any) => {
  return (
    <S.GoogleLoginBtnContainer {...props}>
      <FcGoogle size={19} />
      <span>Sign in with Google</span>
    </S.GoogleLoginBtnContainer>
  );
};

export default GoogleBtn;
