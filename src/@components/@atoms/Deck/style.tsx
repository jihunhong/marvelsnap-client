import { AvatarContainer } from '@atoms/Avatar/style';
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
  border-radius: 10px;
  .tags {
    margin-left: 0;
  }
  padding: 1.1rem 1.3rem;

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
  div.writer {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    ${AvatarContainer} {
      margin-right: 8px;
    }
    h5 {
      font-weight: 400;
    }
    h4 {
      font-weight: 500;
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
        row-gap: 2rem;
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
