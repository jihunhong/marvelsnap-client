import { ButtonTag } from './style';

type Props = {
  children: JSX.Element;
};

const Button = ({ children }: Props) => {
  return <ButtonTag>{children}</ButtonTag>;
};

export default Button;
