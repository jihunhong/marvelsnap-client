import { textEllipsis } from '@styles/text';
import styled from 'styled-components';

export const CardContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  aspect-ratio: 1/1;
  img {
    width: 127%;
    margin-bottom: 4px;
    :hover {
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform: scale(1.05);
    }
  }
  p {
    text-align: center;
    &.name {
      font-size: 0.8rem;
      color: var(--gray-1);
      margin-bottom: 4px;
    }
    &.effect {
      font-size: 0.6rem;
      color: var(--gray-2);
    }
  }
`;
