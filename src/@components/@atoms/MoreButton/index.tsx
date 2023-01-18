import { Attributes, DOMAttributes } from 'react';
import * as S from './style';

interface MoreButtonProps extends DOMAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  className?: string;
  children?: JSX.Element;
}

const MoreButton = ({ children, icon, ...props }: MoreButtonProps & Attributes) => {
  return (
    <S.MoreButtonContainer colorType="success" {...props}>
      {icon}
      {children}
    </S.MoreButtonContainer>
  );
};

export default MoreButton;
