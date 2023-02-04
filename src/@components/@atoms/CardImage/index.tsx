import { cardLoader } from '@lib/loader';
import Image from 'next/image';
import * as S from './style';

const CardImage = ({ cardDefId, w = 123, priority = false }: { cardDefId: string; w?: number; h?: number; priority?: boolean }) => {
  return (
    <S.CardImageContainer>
      <Image src={cardDefId} layout="fill" priority={priority} objectFit="cover" alt={cardDefId} loader={() => cardLoader({ src: cardDefId, width: w * 2 })} />
    </S.CardImageContainer>
  );
};

export default CardImage;
