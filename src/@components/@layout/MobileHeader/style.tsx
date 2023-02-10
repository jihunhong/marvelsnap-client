import device from '@styles/devices';
import styled from 'styled-components';

export const MobileHeaderContainer = styled.header`
  position: fixed;
  background-color: #000;
  width: 100%;
  z-index: var(--layer-header);
  height: 56px;
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 0.5rem;
    @media ${device.tablet} {
      padding: 0.6rem 2rem;
    }

    svg {
      color: rgb(255 255 255 / 80%);
    }
    a:has(svg#logo) {
      width: 130px;
      opacity: 0.9;
      #logo {
        width: 100%;
      }
    }
    div {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
