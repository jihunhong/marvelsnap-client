import CardImage from '@atoms/CardImage';
import type * as T from '@customTypes/Card';
import * as S from './style';

const Card = ({ name, effect, en, w, h }: Partial<T.Card> & { w?: number; h?: number }) => {
  return (
    <S.CardContainer>
      <CardImage en={en!} w={w} h={h} />
      <p className="name">{name}</p>
      <p className="effect">{effect}</p>
    </S.CardContainer>
  );
};

export default Card;
