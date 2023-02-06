import { TagContainer } from '@atoms/Tag/style';
import { CardGridContainer } from '@molecules/CardGrid/style';
import { DeckCodeContainer } from '@molecules/DeckCode/style';
import { RecommendContainer } from '@molecules/Recommend/style';
import device from '@styles/devices';
import { textEllipsis } from '@styles/text';
import styled from 'styled-components';

export const DeckDetailTemplateContainer = styled.article`
  display: flex;
  flex-direction: column;
  > section.deck-info {
    display: grid;
    margin-top: 0;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
      'deck deck deck deck deck deck'
      'deck deck deck deck deck deck'
      'meta meta meta meta meta meta';

    @media ${device.mobileS} {
      margin-top: 0;
      grid-template-columns: repeat(6, 1fr);
      grid-template-areas:
        'deck deck deck deck deck deck'
        'deck deck deck deck deck deck'
        'meta meta meta meta meta meta';
    }

    @media ${device.tablet} {
      padding: 0;

      grid-template-rows: 1fr 1fr;
      grid-template-columns: repeat(13, 1fr);
      grid-template-areas:
        'deck deck deck deck deck deck deck deck deck margin meta meta meta'
        'deck deck deck deck deck deck deck deck deck margin meta meta meta';
    }
    @media ${device.laptopL} {
      padding: 0 2rem;
    }

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
      @media ${device.mobileS} {
        margin-top: 2rem;
      }
      @media ${device.tablet} {
        margin-top: 0;
      }
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
        @media ${device.mobileS} {
          margin: 0.5rem 0 0 auto;
        }
        @media ${device.tablet} {
          margin: auto 0 0 auto;
        }

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
    }
    ${RecommendContainer} {
      width: auto;
      margin-left: auto;
      button {
        margin: 0;
      }
    }
  }
`;
