import styled from 'styled-components';
import { CardContainer } from '../Card/style';
import { Opacity } from '../../../styles/transition';
import device from '../../../styles/devices';

export const DeckContainer = styled.article`
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, #232525 0%, #232525 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid rgb(255 255 255 / 5%);
  border-radius: 10px;

  padding: 24px 28px;

  .header {
    position: relative;
    .action {
      position: absolute;
      top: 0;
      right: 0;
      svg {
        ${Opacity}
      }
    }
  }
  div.author {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    h5 {
      font-weight: 400;
    }
  }

  .meta-bottom {
    display: flex;
    align-items: center;
    svg {
      margin-right: 6px;
    }
  }
  .deck-list {
    width: 100%;
    display: flex;
    flex-direction: column;

    .preview {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .meta {
        h3 {
          font-weight: 700;
          font-size: 1.1rem;
          line-height: 19px;
          margin-bottom: 0.6rem;
        }
        h4 {
          font-weight: 500;
        }
      }
      .meta-bottom {
        h4 {
          font-size: 0.7rem;
          font-weight: 400;
        }
      }
    }
    .cards {
      width: 100%;
      margin: 2rem -6px 2rem -6px;
      display: grid;
      @media ${device.mobileS} {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(2, 1fr);
        row-gap: 2rem;
      }
      @media ${device.tablet} {
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 1fr;
      }
    }
    ${CardContainer} {
      width: 100%;
      img {
        width: 100%;
        object-fit: cover;
        transform: scale(1.3);
      }
    }
  }
`;
