import { variantLoader } from '@lib/loader';
import Image from 'next/image';
import { CardImageContainer } from '@atoms/CardImage/style';
import { SyntheticEvent } from 'react';

const Variant = ({ id, cardDefId, w = 123, priority = false, onClick }: { id: string; cardDefId: string; w?: number; priority?: boolean; onClick: (e: SyntheticEvent) => void }) => {
  return (
    <CardImageContainer onClick={onClick}>
      <Image src={cardDefId} layout="fill" priority={priority} objectFit="cover" alt={cardDefId} loader={() => variantLoader({ src: `${cardDefId}/${id}`, width: w * 2 })} />
    </CardImageContainer>
  );
};

export default Variant;
