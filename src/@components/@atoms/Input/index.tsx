import useInput from '@hooks/useInput';
import { ChangeEvent, forwardRef, MutableRefObject, SyntheticEvent } from 'react';
import * as S from './style';

type Props = {
  placeholder: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type = 'text', placeholder = '', onChange }: Props, ref: MutableRefObject<any>) => {
  const [value, handler] = useInput();
  return (
    <S.InputContainer>
      <S.InputTag ref={ref} type={type} placeholder={placeholder} value={value} onChange={onChange || handler} autoFocus />
    </S.InputContainer>
  );
};

export default forwardRef(Input);
