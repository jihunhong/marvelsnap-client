import styled from 'styled-components';
import device from '../../../styles/devices';
import { Opacity } from '../../../styles/transition';

export const Header = styled.header`
  position: fixed;
  transform: translate3d(0px, 0px, 0px);
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  color: rgb(255, 255, 255);
  transition: backdrop-filter 0.3s linear 0s, background-color 0.3s linear 0s;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.65);
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--layer-header);
  display: flex;
  justify-content: center;

  .header-menu {
    max-width: 1192px;
    width: 100%;
    margin: 0 62px;
    height: 75px;
    display: flex;
    align-items: center;

    svg {
      filter: invert(100%);
    }

    @media ${device.mobileS} {
      margin: 0 2rem;
    }

    @media ${device.tablet} {
      margin: 0 62px;
    }

    .menus {
      a {
        ${Opacity}
      }
      margin-left: auto;
      display: flex;
      justify-content: space-between;
      span {
        margin-left: 2rem;
        font-weight: 500;
      }
    }
  }
`;
