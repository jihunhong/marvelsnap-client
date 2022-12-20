import styled from 'styled-components';
import device from '../../../styles/devices';

export const PageIntroContainer = styled.section`
  position: relative;
  display: flex;

  @media ${device.mobileS} {
    aspect-ratio: 6 / 5;
  }

  @media ${device.tablet} {
    aspect-ratio: 2543 / 531;
  }
  width: 100%;
  .header {
    width: 100%;

    @media ${device.mobileS} {
      margin: auto 2rem;
    }
    @media ${device.tablet} {
      margin: auto;
    }
    max-width: 1192px;
    z-index: 2;
    h1 {
      font-size: 4rem;
      margin-bottom: 0.7rem;
      > div {
        display: flex;
        align-items: center;
      }
    }
    h4 {
      font-weight: 500;
      color: var(--gray-2);
      font-style: italic;
      margin-bottom: 0.6rem;
    }
    svg {
      margin-right: 6px;
    }
  }
`;

type BackgroundProps = {
  bgSource: string;
};
export const Background = styled.div<BackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: auto;
  overflow: hidden;

  @media ${device.mobileS} {
    aspect-ratio: 6 / 5;
  }

  @media ${device.tablet} {
    aspect-ratio: 2543 / 531;
  }
  background: url(${p => p.bgSource}) no-repeat top center;
  background-size: cover;

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
`;
