import { variantLoader } from '@lib/loader';
import Image from 'next/image';
import { CardImageContainer } from '@atoms/CardImage/style';

const Variant = ({ id, cardDefId, w = 123, priority = false }: { id: string; cardDefId: string; w?: number; priority?: boolean }) => {
  return (
    <CardImageContainer>
      <Image src={cardDefId} layout="fill" priority={priority} objectFit="cover" alt={cardDefId} loader={() => variantLoader({ src: `${cardDefId}/${id}`, width: w * 2 })} />
    </CardImageContainer>
  );
};

export default Variant;
