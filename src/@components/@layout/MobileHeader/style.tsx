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
    padding: 0.6rem 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media ${device.mobileM} {
      padding: 1rem 2.2rem;
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
