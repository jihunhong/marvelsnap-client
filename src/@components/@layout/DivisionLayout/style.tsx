import styled from 'styled-components';
import { CardListContainer } from '../../@molecules/CardList/style';

export const DivisionLayoutContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-areas: 'card card card card card card card card offset filter filter filter';

  ${CardListContainer} {
    grid-area: card;
  }

  section:nth-child(1):has(${CardListContainer}) {
    grid-area: card;
  }

  --min-height: calc(100vh - var(--header-height));
  > section:nth-child(2) {
    position: relative;
    grid-area: filter;

    .content {
      position: sticky;
      top: var(--header-height);
      min-height: var(--min-height);
    }
  }
`;
