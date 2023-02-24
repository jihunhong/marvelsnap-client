import Card from '@atoms/Card';
import * as T from '@customTypes/Card';
import { asc } from '@lib/sort';
import Link from 'next/link';
import * as S from './style';

type CardGridProps = {
  expand: T.Expand;
};

const CardGrid = ({ expand }: CardGridProps) => {
  const dataSource = asc(expand?.items);
  return (
    <S.CardGridContainer>
      {dataSource?.map(item => (
        <Link key={item?.cardDefId} href={{ pathname: '/card/[cardDefId]', query: { cardDefId: item?.cardDefId } }}>
          <a>
            <Card {...item} w={140} />
          </a>
        </Link>
      ))}
    </S.CardGridContainer>
  );
};

export default CardGrid;
