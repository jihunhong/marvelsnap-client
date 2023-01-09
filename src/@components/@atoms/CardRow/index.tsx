import Cost from '@atoms/Cost';
import * as T from '@customTypes/Card';
import * as S from './style';

const CardRow = ({ cost, name, en, onClick }: T.Card) => {
  return (
    <S.CardRowContainer $en={en} onClick={onClick}>
      <div className="bg"></div>
      <Cost amount={cost} />
      <p>{name}</p>
    </S.CardRowContainer>
  );
};

export default CardRow;
