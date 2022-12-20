import type * as T from '../../../../@types/Card';
import * as S from './style';

const Card = ({
  name,
  src,
  cost,
  tags,
  keywords,
  source,
  power,
  variants,
  artist,
  description,
}: T.Card) => {
  return (
    <S.CardContainer>
      <img
        src="https://marvelsnapzone.com/wp-content/themes/blocksy-child/assets/media/cards/devil-dinosaur.webp?v=23"
        loading="lazy"
      />
    </S.CardContainer>
  );
};

export default Card;
