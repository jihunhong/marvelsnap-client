import styled from 'styled-components';

export const CardListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(6, calc(100% / 6));
  column-gap: 8px;
`;
