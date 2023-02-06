import useInput from '@hooks/useInput';
import { ChangeEvent, ForwardedRef, forwardRef } from 'react';
import * as S from './style';

type Props = {
  placeholder: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  valule?: string | null;
};

const Input = ({ type = 'text', placeholder = '' }: Props, ref: ForwardedRef<any>) => {
  const [value, handler] = useInput('');
  return (
    <S.InputContainer>
      <S.InputTag ref={ref} type={type} placeholder={placeholder} value={value as string} onChange={handler} autoFocus />
    </S.InputContainer>
  );
};

export default forwardRef(Input);
