import * as S from './style';
import type * as T from '@customTypes/Deck';
import Deck from 'src/@components/@atoms/Deck';

type Props = {
  dataSource: Array<T.Deck>;
};

const DeckList = ({ dataSource }: Props) => {
  return (
    <S.DeckListContainer>
      {Array(4)
        .fill()
        .map(() => (
          <Deck />
        ))}
    </S.DeckListContainer>
  );
};

export default DeckList;
