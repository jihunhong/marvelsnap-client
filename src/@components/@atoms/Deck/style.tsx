import styled from 'styled-components';
import device from '../../../styles/devices';
import { Opacity } from '../../../styles/transition';
import { CardContainer } from '../Card/style';

export const DeckContainer = styled.article`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: linear-gradient(45deg, #232525 0%, #232525 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid rgb(255 255 255 / 5%);
  .tags {
    margin-left: 0;
  }
  padding: 0.8rem 0.5rem;
  border-radius: 4px;
  @media ${device.mobileM} {
    padding: 1.1rem 1.3rem;
    border-radius: 10px;
  }

  .header {
    position: relative;
    display: flex;
    align-items: center;
    .action {
      position: absolute;
      top: 0;
      right: 0;
      svg {
        ${Opacity}
      }
    }
  }
  div.footer {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    .post-info {
      display: grid;
      grid-template-columns: repeat(3, 68px);
      column-gap: 16px;
      div {
        display: grid;
        grid-template-columns: 20px 40px;
        column-gap: 8px;
        svg,
        span {
          color: var(--gray-1);
          text-align: center;
          font-weight: 600;
        }
      }
      div:nth-of-type(1) span {
        border-right: 1px solid rgb(134 132 132 / 45%);
      }
    }

    > span {
      font-size: 0.8rem;
      font-weight: 500;
      margin-left: auto;
      color: var(--gray-1);
    }
  }

  .meta-top {
    a {
      display: flex;
      align-items: center;
    }

    margin-bottom: 1rem;
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
        h2 {
          font-weight: 700;
          font-size: 1.4rem;
          line-height: 19px;
          margin-bottom: 0;
          color: var(--white);
        }
        div {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          color: rgb(255 255 255 / 95%);
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
      margin: 1rem -6px 1rem -6px;
      display: grid;
      @media ${device.mobileS} {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(2, 1fr);
        row-gap: 0rem;
      }
      @media ${device.tablet} {
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 1fr;
        column-gap: 4px;
      }
    }
    ${CardContainer} {
      width: 100%;
      p.effect,
      p.name {
        display: none;
      }
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
