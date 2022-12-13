import * as S from './style';
import Card from '../../@atoms/Card';
import type * as T from '../../../../@types/Card';

type Props = {
  dataSource: Array<T.Card>;
};

const CardList = ({ dataSource }: Props) => {
  return (
    <S.CardListContainer>
      {Array(160)
        .fill()
        .map(() => (
          <Card />
        ))}
    </S.CardListContainer>
  );
};

export default CardList;
