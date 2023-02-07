import styled from 'styled-components';
import device from '@styles/devices';

export const PageIntroContainer = styled.section`
  position: relative;
  display: flex;

  width: 100%;
  height: 350px;
  .header {
    width: 100%;
    padding-top: 22px;
    margin: auto 2.2rem;
    width: 100%;

    @media ${device.mobileS} {
      margin: auto 2.2rem;
      width: 100%;
    }
    @media ${device.tablet} {
      margin: auto 2.2rem;
      width: 100%;
    }
    @media ${device.laptop} {
      margin: auto 62px;
      width: 100%;
    }
    @media ${device.laptopL} {
      margin: auto;
      width: 100%;
    }
    max-width: 1192px;
    z-index: 2;
    h1 {
      font-size: 4rem;
      @media ${device.mobileS} {
        font-size: 3.5rem;
      }
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

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 350px;

  img {
    filter: blur(6px);
  }

  :before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgb(22 24 25 / 50%);
    z-index: 1;
  }

  :after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: -1rem;
    right: -1rem;
    height: 15rem;
    background-image: linear-gradient(to top, var(--black-background), rgba(0, 0, 0, 0));
  }
`;
