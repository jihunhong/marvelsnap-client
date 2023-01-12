import styled from 'styled-components';

export const CardListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(6, calc(100% / 6));
  grid-template-rows: repeat(12, 1fr);
  column-gap: 8px;
  row-gap: 8px;

  div {
    transition: all 0.3s ease;
    &[data-selected='true'] {
      filter: grayscale(1);
      opacity: 0.7;
      p {
        color: var(--gray-2);
      }
    }
  }
`;
