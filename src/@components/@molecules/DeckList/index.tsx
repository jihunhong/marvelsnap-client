import Deck from '@atoms/Deck';
import type * as T from '@customTypes/Deck';
import * as S from './style';

type Props = {
  dataSource?: undefined | Array<T.Deck>;
};

const DeckList = ({ dataSource = [] }: Props) => {
  return (
    <S.DeckListContainer>
      {dataSource?.map(item => (
        <Deck key={item.id} {...item} cards={item.expand?.items} writer={item.expand?.writer} />
      ))}
    </S.DeckListContainer>
  );
};

export default DeckList;
