import * as S from './style';

const Divider = ({ margin, borderless, children }: { margin: string; borderless: boolean; children: JSX.Element }) => {
  return (
    <S.DividerContainer $margin={margin} $borderless={borderless}>
      {children}
    </S.DividerContainer>
  );
};

export default Divider;
