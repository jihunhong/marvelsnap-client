import useInput from '@hooks/useInput';
import { forwardRef, MutableRefObject } from 'react';
import * as S from './style';

type Props = {
  placeholder: string;
  type?: string;
};

const Input = ({ type = 'text', placeholder = '' }: Props, ref: MutableRefObject<any>) => {
  const [value, handler] = useInput();
  return (
    <S.InputContainer>
      <S.InputTag ref={ref} type={type} placeholder={placeholder} value={value} onChange={handler} autoFocus />
    </S.InputContainer>
  );
};

export default forwardRef(Input);
