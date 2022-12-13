import styled from 'styled-components';
import { CardContainer } from '../Card/style';

export const DeckContainer = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray-1);
  border-radius: 10px;

  padding: 8px;

  .deck-list {
    width: 100%;
    display: grid;
    grid-template-areas: 'offset offset offset card card card card card card' 'offset offset offset card card card card card card';
    grid-template-columns: repeat(9, 1fr);
    .offset {
      grid-area: offset;
    }
    .cards {
      grid-area: card;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
    ${CardContainer} {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
`;
