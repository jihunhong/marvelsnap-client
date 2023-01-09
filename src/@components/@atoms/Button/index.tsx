import { ButtonTag } from './style';

type Props = {
  colorType?: 'primary' | 'secondary' | 'warn' | 'success';
  icon?: JSX.Element;
  children?: JSX.Element;
};

const Button = ({ children, colorType = 'primary', icon, ...props }: Props) => {
  return (
    <ButtonTag colorType={colorType} {...props}>
      {icon}
      {children}
    </ButtonTag>
  );
};

export default Button;
