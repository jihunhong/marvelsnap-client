import styled from 'styled-components';
import device from '../../../styles/devices';
import { ellipsis } from '../../../styles/common';

export const IntroSectionContainer = styled.div`
  width: 100%;

  .container {
    position: relative;
    display: flex;

    @media ${device.mobileS} {
      aspect-ratio: 6/5;
    }

    @media ${device.tablet} {
      aspect-ratio: 2543 / 531;
    }
    width: 100%;
  }
  .content {
    width: 100%;
    max-width: 1192px;
    position: relative;
    z-index: 2;
    @media ${device.mobileS} {
      margin: auto 2rem;
      padding-top: var(--header-height);
      overflow: hidden;
    }
    @media ${device.tablet} {
      margin: auto;
      padding-top: 0;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1,
    h4 {
      font-family: Poppins;
    }
    h1 {
      @media ${device.mobileS} {
        font-size: 1.8rem;
      }
      @media ${device.tablet} {
        font-size: 4.2rem;
      }
      margin-bottom: 4px;
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
    svg {
      margin-left: 6px;
      vertical-align: middle;
    }
  }

  .owner-link {
    margin-bottom: 1.2rem;
  }

  .input-action {
    width: 100%;
    height: 48px;
  }

  .video-background {
    top: 0px;
    left: 0px;
    z-index: 1;
    position: absolute;
    width: 100%;
    height: auto;
    overflow: hidden;

    @media ${device.mobileS} {
      aspect-ratio: 6/5;
    }

    @media ${device.tablet} {
      aspect-ratio: 2543 / 531;
    }

    > div {
      :before {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgb(22 24 25 / 95%);
        z-index: 1;
      }
      display: flex;
      align-items: center;
      height: 100%;
    }
    iframe {
      width: 100%;
      height: auto;
      @media ${device.mobileS} {
        aspect-ratio: 6/5;
      }
      @media ${device.tablet} {
        aspect-ratio: 16 / 9;
      }
    }
  }
`;
