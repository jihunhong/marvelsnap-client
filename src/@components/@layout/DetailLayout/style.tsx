import { CardGridContainer } from '@molecules/CardGrid/style';
import { DeckCodeContainer } from '@molecules/DeckCode/style';
import { RecommendContainer } from '@molecules/Recommend/style';
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

  > section.deck-info {
    display: grid;
    grid-template-rows: 32px 1fr 1fr;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas:
      'head head head head head head head head head offset offset offset'
      'deck deck deck deck deck deck deck deck deck meta meta meta'
      'deck deck deck deck deck deck deck deck deck meta meta meta';

    margin-top: 2rem;
    margin-bottom: 1rem;
    ${CardGridContainer} {
      width: 100%;
      grid-area: deck;
    }
    > .meta {
      width: 100%;
      grid-area: meta;
    }
  }

  .description {
    background: #0f0f0fcc;
    height: auto;
    margin: 24px 0;
    padding: 24px 30px;
    border-radius: 6px;
    color: var(--white);
  }

  .actions {
    display: flex;
    align-items: center;
    margin: 0 0 2rem;
    ${DeckCodeContainer} {
      width: calc(100% - 100px);
      height: 32px;
      margin-right: 1rem;
    }
    ${RecommendContainer} {
      width: 100px;
    }
  }
`;
