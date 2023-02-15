import CardImage from '@atoms/CardImage';
import type * as T from '@customTypes/Card';
import * as S from './style';

const Card = ({ name, effect, cardDefId, w, h }: Partial<T.Card> & { w?: number; h?: number }) => {
  return (
    <S.CardContainer>
      <CardImage cardDefId={cardDefId!} w={w} />
      <div className="text-content">
        <p className="name">{name}</p>
        <p className="effect">{effect}</p>
      </div>
      <p className="name">{name}</p>
      <p className="effect">{effect}</p>
    </S.CardContainer>
  );
};

export default Card;
