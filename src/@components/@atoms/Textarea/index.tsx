import { StyledTextarea } from '@atoms/Textarea/style';
import { forwardRef, MutableRefObject } from 'react';

const Textarea = ({ ...props }, ref?: MutableRefObject<any>) => {
  return <StyledTextarea ref={ref} {...props} />;
};

export default forwardRef(Textarea);
