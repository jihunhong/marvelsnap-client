import * as S from './style';

type Props = {
  amount: number | string;
  active?: boolean;
};

const Cost = ({ amount, active = false, ...props }: Props) => {
  return (
    <S.CostContainer active={active} {...props}>
      {amount}
    </S.CostContainer>
  );
};

export default Cost;
