import { SyntheticEvent } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import * as S from './style';

type DeckCodeProps = {
  placeholder: string;
  value?: string;
  onClick?: (e: SyntheticEvent) => void;
};

const DeckCode = ({ placeholder = '', value, onClick }: DeckCodeProps) => {
  return (
    <S.DeckCodeContainer onClick={onClick}>
      <input id="deck-code" type="text" value={value} placeholder={placeholder} readOnly />
      <FaRegCopy />
      <span>덱코드 복사하기</span>
    </S.DeckCodeContainer>
  );
};

export default DeckCode;
