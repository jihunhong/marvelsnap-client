import * as S from './style';
import useInput from '../../@hooks/useInput';

type Props = {
  placeholder: string;
  type?: string;
};

const Input = ({ type = 'text', placeholder = '' }: Props) => {
  const [value, handler] = useInput();
  return (
    <S.InputContainer>
      <S.InputTag
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handler}
        autoFocus
      />
    </S.InputContainer>
  );
};

export default Input;
