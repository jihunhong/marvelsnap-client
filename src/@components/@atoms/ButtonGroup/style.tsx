import { ButtonTag } from '@atoms/Button/style';
import styled from 'styled-components';

export const ButtonGroupContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  ${ButtonTag} {
    background: transparent;
    margin: 0;
    border-radius: 0;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out, border 0.3 ease-in-out;
    border: 2px solid rgb(134 76 166 / 70%);
    &.active {
      opacity: 1;
      border: 2px solid var(--primary-color);
    }
    :hover {
      transform: none;
    }

    :nth-child(1) {
      border-radius: 6px 0px 0px 6px;
    }
    :nth-last-child(1) {
      border-radius: 0px 6px 6px 0px;
    }
  }
`;
