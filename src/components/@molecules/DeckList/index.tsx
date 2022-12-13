import * as S from './style';
import type * as T from '../../../../@types/Deck';
import Deck from '../../@atoms/Deck';

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
