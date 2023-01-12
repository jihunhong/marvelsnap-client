import { CardRowContainer } from '@atoms/CardRow/style';
import styled from 'styled-components';

export const DeckRowContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(12, 40px);
  :has(section.deckcode-info) {
    display: flex;
  }
  row-gap: 1px;
  border-style: dashed;
  border-color: var(--gray-2);
  padding: 12px;
  border-radius: 6px;
  max-height: 515px;

  > div {
    cursor: pointer;
  }

  ${CardRowContainer} {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
`;

export const DeckCodeInputContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: auto;
`;
