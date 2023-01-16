import * as S from './style';

type Props = {
  className: string;
  icon?: JSX.Element;
  children: JSX.Element | Array<JSX.Element>;
};

const Tag = ({ children, icon, ...props }: Props) => {
  return (
    <S.TagContainer {...props}>
      {icon} {children}
    </S.TagContainer>
  );
};

export default Tag;
