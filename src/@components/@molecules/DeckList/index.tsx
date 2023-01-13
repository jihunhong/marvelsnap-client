import * as S from './style';
import type * as T from '@customTypes/Deck';
import Deck from '@atoms/Deck';

type Props = {
  dataSource?: undefined | Array<T.Deck>;
};

const DeckList = ({ dataSource = [] }: Props) => {
  return (
    <S.DeckListContainer>
      {dataSource?.map(item => (
        <Deck key={item.id} {...item} />
      ))}
    </S.DeckListContainer>
  );
};

export default DeckList;
