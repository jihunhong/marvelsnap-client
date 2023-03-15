import { ellipsis } from '@styles/common';
import device from '@styles/devices';
import styled from 'styled-components';

export const IntroSectionContainer = styled.div`
  display: flex;
  max-width: 1192px;
  height: 480px;
  width: auto;
  margin: auto 0.5rem;
  @media ${device.tablet} {
    margin: auto 2rem;
    height: 480px;
  }
  @media ${device.laptop} {
    margin: 0 62px;
    height: 600px;
  }
  @media ${device.laptopL} {
    margin: 0 auto;
    width: auto;
    height: 600px;
  }
  .container {
    display: flex;
    z-index: 1;
    width: 100%;
  }
  .text,
  .search {
    margin: auto 0;
    width: 100%;
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      @media ${device.mobileS} {
        font-size: 1.8rem;
      }
      @media ${device.tablet} {
        font-size: 4.2rem;
      }
      margin-bottom: 8px;
    }
    h4 {
      font-weight: 500;
      color: var(--gray-2);
      font-style: italic;
      @media ${device.mobileS} {
        font-size: 0.6rem;
        margin-bottom: 0.46rem;
        ${ellipsis}
      }
      @media ${device.tablet} {
        font-size: 1.17rem;
        margin-bottom: 1rem;
      }
    }
    input {
      font-size: 0.6rem;
      @media ${device.mobileS} {
        font-size: 0.6rem;
      }
      @media ${device.tablet} {
        font-size: 1.17rem;
      }
    }
    svg {
      margin-left: 6px;
      vertical-align: middle;
    }
  }

  .owner-link {
    margin-bottom: 1.2rem;
  }

  .video-background {
    top: 0px;
    left: 0px;
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 480px;

    @media ${device.tablet} {
      height: 480px;
    }
    @media ${device.laptop} {
      height: 600px;
    }
    overflow: hidden;

    > div {
      filter: blur(4px);
      position: relative;
      width: 100%;
      height: inherit;
      background-color: rgb(22 24 25 / 85%);
      z-index: 0;
      display: flex;
      align-items: center;
      :before {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(22, 24, 25, 0.95);
        z-index: 1;
      }
    }
    video {
      @media ${device.tablet} {
        transition-delay: 0.1s;
      }
      transition: opacity 0.15s;
      opacity: 0;
      &[data-visible='true'] {
        opacity: 1;
      }
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      height: 100%;
      object-fit: cover;
    }
    :after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 0;
      right: 0;
      height: 8rem;
      background-image: linear-gradient(to top, var(--black-background), transparent);
    }
  }
`;
