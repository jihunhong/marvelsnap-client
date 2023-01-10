import styled from 'styled-components';

export const DeckStatisticContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 13px);
  justify-content: space-between;
  div[data-type='keyword'] {
    display: grid;
    color: #bbbbbb;
    align-items: center;
    justify-content: center;
    row-gap: 8px;
    text-align: center;
    span {
      font-size: 1.4rem;
      font-weight: 500;
      font-family: Oswald sans-serif;
    }
  }
`;
