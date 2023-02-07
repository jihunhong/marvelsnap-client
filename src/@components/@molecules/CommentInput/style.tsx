import { StyledTextarea } from '@atoms/Textarea/style';
import styled from 'styled-components';

export const CardCommentContainer = styled.div`
  position: relative;
  margin-bottom: 1.4rem;
  ${StyledTextarea} {
    padding-right: 83px;
  }
  button {
    position: absolute;
    height: 44px;
    bottom: 18px;
    right: 10px;
    margin: 0;
  }
`;
