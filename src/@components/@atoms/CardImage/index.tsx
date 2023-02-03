import { cardLoader } from '@lib/loader';
import Image from 'next/image';
import * as S from './style';

const CardImage = ({ en, w = 123, h = 158, priority = false }: { en: string; w?: number; h?: number; priority?: boolean }) => {
  return (
    <S.CardImageContainer>
      <Image src={en} layout="fill" priority={priority} objectFit="cover" alt={en} loader={() => cardLoader({ src: en, width: w * 2, height: h * 2 })} />
    </S.CardImageContainer>
  );
};

export default CardImage;
