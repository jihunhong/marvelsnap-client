import useActiveButtonGroup from '@hooks/action/useActiveButtonGroup';
import * as S from './style';

type ButtonProps = {
  children: JSX.Element | Array<JSX.Element>;
};

const ButtonGroup = ({ children }: ButtonProps) => {
  const [onClick] = useActiveButtonGroup();
  return <S.ButtonGroupContainer onClick={onClick}>{children}</S.ButtonGroupContainer>;
};

export default ButtonGroup;
