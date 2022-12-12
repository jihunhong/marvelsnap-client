import styled from 'styled-components';

export const CardListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, calc(100% / 4));
  column-gap: 8px;
`;
