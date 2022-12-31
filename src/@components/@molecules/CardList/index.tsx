import type * as T from '@customTypes/Card';
import Card from '@atoms/Card';
import * as S from './style';

type Props = {
  dataSource: Array<T.Card>;
};

const CardList = ({ dataSource }: Props) => {
  return (
    <S.CardListContainer>
      {dataSource?.map(item => (
        <Card key={item?.id} {...item} />
      ))}
    </S.CardListContainer>
  );
};

export default CardList;
