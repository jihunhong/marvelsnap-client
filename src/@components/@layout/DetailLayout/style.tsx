import styled from 'styled-components';

// prettier - ignore
export const DetailLayoutContainer = styled.section`
  display: flex;
  flex-direction: column;
  > section.card-info {
    display: flex;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 5rem;
    > div {
      width: 100%;
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 357px auto;
      grid-column-gap: 48px;
    }
  }
`;
