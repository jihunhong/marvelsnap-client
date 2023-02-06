import * as S from './style';

const Divider = ({ margin, borderless = false, children }: { margin: number; borderless?: boolean; children?: JSX.Element }) => {
  return (
    <S.DividerContainer $margin={margin} $borderless={borderless}>
      {children}
    </S.DividerContainer>
  );
};

export default Divider;
