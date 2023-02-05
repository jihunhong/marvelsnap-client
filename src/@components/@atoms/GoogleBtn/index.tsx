import * as S from './style';
import { FcGoogle } from 'react-icons/fc';
import { SyntheticEvent } from 'react';

const GoogleBtn = ({ onClick }: { onClick: (e: SyntheticEvent) => void }) => {
  return (
    <S.GoogleLoginBtnContainer onClick={onClick}>
      <FcGoogle size={19} />
      <span>Sign in with Google</span>
    </S.GoogleLoginBtnContainer>
  );
};

export default GoogleBtn;
