import { baseImgix } from '@constant/imigx';
import type * as T from '@customTypes/Card';
import * as S from './style';

const Card = ({ name, src, cost, tags, keywords, source, power, variants, artist, effect, en }: T.Card) => {
  return (
    <S.CardContainer>
      <img src={`${baseImgix}/cards/basic/${en?.toLowerCase().replaceAll(' ', '-')}.webp?w=256&h=256`} loading="lazy" alt={name} width={155} height={155} />
      <p className="name">{name}</p>
      <p className="effect">{effect}</p>
    </S.CardContainer>
  );
};

export default Card;
