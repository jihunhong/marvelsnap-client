import { Attributes, DOMAttributes } from 'react';
import { ButtonTag } from './style';

interface Props extends DOMAttributes<HTMLButtonElement> {
  colorType?: 'primary' | 'secondary' | 'warn' | 'success';
  icon?: JSX.Element;
  className?: string;
  children?: JSX.Element;
}

const Button = ({ children, colorType = 'primary', icon, ...props }: Props & Attributes) => {
  return (
    <ButtonTag colorType={colorType} {...props}>
      {icon}
      {children}
    </ButtonTag>
  );
};

export default Button;
