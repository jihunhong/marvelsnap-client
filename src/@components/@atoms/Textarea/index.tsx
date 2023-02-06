import { StyledTextarea } from '@atoms/Textarea/style';
import { ForwardedRef, forwardRef } from 'react';

const Textarea = ({ ...props }, ref?: ForwardedRef<any>) => {
  return <StyledTextarea ref={ref} {...props} />;
};

export default forwardRef(Textarea);
