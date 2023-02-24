import { Attributes, DOMAttributes, ReactNode } from 'react';
import { ButtonTag } from './style';

interface ButtonProps extends DOMAttributes<HTMLButtonElement> {
  colorType?: 'primary' | 'secondary' | 'warn' | 'success' | 'plain';
  icon?: JSX.Element;
  className?: string;
  children?: JSX.Element | ReactNode;
  type?: 'submit' | 'button';
}

const Button = ({ children, type = 'button', colorType = 'primary', icon, ...props }: ButtonProps & Attributes) => {
  return (
    <ButtonTag colorType={colorType} type={type} {...props}>
      {icon}
      {children}
    </ButtonTag>
  );
};

export default Button;
