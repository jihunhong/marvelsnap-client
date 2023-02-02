import CardImage from '@atoms/CardImg';
import * as T from '@customTypes/Card';
import * as S from './style';

type CardGridProps = {
  expand: T.Expand;
};

const CardGrid = ({ expand }: CardGridProps) => {
  return (
    <S.CardGridContainer>
      {expand?.items?.map(item => (
        <CardImage key={item?.cardDefId} en={item.en} w={151} h={204} />
      ))}
    </S.CardGridContainer>
  );
};

export default CardGrid;
