import Cost from '@atoms/Cost';
import * as T from '@customTypes/Card';
import * as S from './style';

const CardRow = ({ cost, name, cardDefId, onClick }: T.Card) => {
  return (
    <S.CardRowContainer $cardDefId={cardDefId} onClick={onClick}>
      <div className="bg"></div>
      <Cost amount={cost} />
      <p>{name}</p>
    </S.CardRowContainer>
  );
};

export default CardRow;
