import { TagContainer } from '@atoms/Tag/style';
import { CardGridContainer } from '@molecules/CardGrid/style';
import { DeckCodeContainer } from '@molecules/DeckCode/style';
import { RecommendContainer } from '@molecules/Recommend/style';
import { textEllipsis } from '@styles/text';
import styled from 'styled-components';

export const DeckDetailTemplateContainer = styled.article`
  display: flex;
  flex-direction: column;
  > section.deck-info {
    display: grid;
    padding: 0 2rem;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(13, 1fr);
    grid-template-areas:
      'deck deck deck deck deck deck deck deck deck margin meta meta meta'
      'deck deck deck deck deck deck deck deck deck margin meta meta meta';

    margin-top: 2rem;
    margin-bottom: 1rem;
    ${CardGridContainer} {
      width: 100%;
      grid-area: deck;
    }
    > .meta {
      width: 100%;
      grid-area: meta;
      display: flex;
      flex-direction: column;
      h2 {
        ${textEllipsis}
        width: 100%;
        margin-bottom: 8px;
      }
      div.profile {
        margin-bottom: 1rem;
        span {
          font-weight: 700;
          margin-left: 8px;
        }
      }
      div.series {
        ${TagContainer} {
          display: flex;
          align-items: center;
          span {
            margin-left: auto;
          }
        }
      }
      div.date {
        display: flex;
        align-items: center;
        margin: auto auto 0 0;

        span {
          font-weight: 700;
          color: var(--gray-2);
          font-size: 0.8rem;
        }
      }
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
