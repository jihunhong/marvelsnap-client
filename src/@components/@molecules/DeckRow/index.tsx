import Input from '@atoms/Input';
import * as T from '@customTypes/Card';
import useDeckPaste from '@hooks/action/useDeckPaste';
import * as S from '@molecules/DeckRow/style';
import { useRef } from 'react';

const DeckRow = ({ dataSource = [], renderItem }: { dataSource: Array<T.Card>; renderItem: (item: T.Card) => JSX.Element }) => {
  const inputRef = useRef(null);
  const [handler] = useDeckPaste(inputRef);
  if (dataSource?.length === 0) {
    return (
      <S.DeckRowContainer>
        <S.DeckCodeInputContainer className="deckcode-info">
          <Input ref={inputRef} placeholder="덱 코드로 불러올까요?" />
        </S.DeckCodeInputContainer>
      </S.DeckRowContainer>
    );
  }
  return <S.DeckRowContainer>{dataSource?.map(renderItem)}</S.DeckRowContainer>;
};

export default DeckRow;
