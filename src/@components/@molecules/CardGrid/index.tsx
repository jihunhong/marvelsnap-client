import CardImage from '@atoms/CardImage';
import * as T from '@customTypes/Card';
import * as S from './style';

type CardGridProps = {
  expand: T.Expand;
};

const CardGrid = ({ expand }: CardGridProps) => {
  return (
    <S.CardGridContainer>
      {expand?.items?.map(item => (
        <CardImage key={item?.cardDefId} cardDefId={item.cardDefId} w={140} priority />
      ))}
    </S.CardGridContainer>
  );
};

export default CardGrid;
