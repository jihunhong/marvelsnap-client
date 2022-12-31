import type * as T from '@customTypes/Card';
import * as S from './style';
import Image from 'next/image';

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
  en
}: T.Card) => {
  return (
    <S.CardContainer>
      <img
        src={`https://marvelsnap.imgix.net/cards/basic/${en.toLowerCase().replaceAll(' ', '-')}.webp?w=256&h=256`}
        loading="lazy"
      />
      {/* <Image width={256} height={256} src={`https://marvelsnap.imgix.net/cards/basic/${en.toLowerCase().replaceAll(' ', '-')}.webp?w=256&h=256`} alt={name} lazyBoundary="300px" /> */}
    </S.CardContainer>
  );
};

export default Card;
