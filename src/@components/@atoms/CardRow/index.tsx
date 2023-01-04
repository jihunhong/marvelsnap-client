import Cost from '@atoms/Cost';
import * as S from './style';
import * as T from '@customTypes/Card';

const CardRow = ({ cost, name, en }: T.Card) => {
  return (
    <S.CardRowContainer $en={en}>
      <Cost amount={cost} />
      <p>{name}</p>
    </S.CardRowContainer>
  );
};

export default CardRow;
