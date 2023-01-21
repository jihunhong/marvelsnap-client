import CardImage from '@atoms/CardImg';
import type * as T from '@customTypes/Card';
import * as S from './style';

const Card = ({ name, src, cost, tags, keywords, source, power, variants, artist, effect, en }: T.Card) => {
  return (
    <S.CardContainer>
      <CardImage en={en} />
      <p className="name">{name}</p>
      <p className="effect">{effect}</p>
    </S.CardContainer>
  );
};

export default Card;
