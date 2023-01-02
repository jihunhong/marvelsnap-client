import styled from 'styled-components';

export const CardListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(6, calc(100% / 6));
  grid-template-rows: repeat(4, 1fr);
  column-gap: 8px;
  row-gap: 8px;
`;
