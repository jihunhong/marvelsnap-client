import * as S from './style';

type Props = {
  children: Array<JSX.Element> | JSX.Element;
};

const DetailLayout = ({ children }: Props) => {
  return <S.DetailLayoutContainer>{children}</S.DetailLayoutContainer>;
};

export default DetailLayout;
