import { ButtonTag } from './style';

type Props = {
  colorType?: 'primary' | 'secondary';
  icon?: JSX.Element;
  children: JSX.Element;
};

const Button = ({ children, colorType = 'primary', icon }: Props) => {
  return (
    <ButtonTag colorType={colorType}>
      {icon}
      {children}
    </ButtonTag>
  );
};

export default Button;
