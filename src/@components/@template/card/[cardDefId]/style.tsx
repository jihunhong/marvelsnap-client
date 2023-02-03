import styled from 'styled-components';

export const CardDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div.meta {
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 357px auto;
    grid-column-gap: 48px;
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
`;
