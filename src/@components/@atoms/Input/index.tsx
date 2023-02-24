import useInput from '@hooks/useInput';
import { ChangeEvent, ForwardedRef, forwardRef } from 'react';
import * as S from './style';

type Props = {
  placeholder: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
};

const Input = ({ type = 'text', placeholder = '', name = '', value, onChange }: Props, ref: ForwardedRef<any>) => {
  return (
    <S.InputContainer>
      <S.InputTag ref={ref} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} autoFocus />
    </S.InputContainer>
  );
};

export default forwardRef(Input);
