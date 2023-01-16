import styled from 'styled-components';

export const RatingContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 48px);
  column-gap: 12px;
  svg {
    cursor: pointer;
    transition: all 0.2s;
    &.true {
      fill: #ffb851;
      transform: scale(1.05);
    }
  }
`;
