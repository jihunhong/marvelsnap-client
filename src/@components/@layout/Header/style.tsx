import { AvatarContainer } from '@atoms/Avatar/style';
import styled from 'styled-components';
import device from '../../../styles/devices';
import { Opacity } from '../../../styles/transition';

export const Header = styled.header`
  position: fixed;
  transform: translate3d(0px, 0px, 0px);
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  background-color: rgba(0, 0, 0, 0.65);
  color: rgb(255, 255, 255);
  transition: backdrop-filter 0.3s linear 0s, background-color 0.3s linear 0s;
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--layer-header);
  display: flex;
  height: 56px;

  #logo {
    width: 130px;
  }

  .header-menu {
    width: 100%;
    max-width: 1192px;
    padding: 0 4px;
    margin: 0 0.5rem;

    @media ${device.tablet} {
      margin: 0 2rem;
      width: 100%;
    }
    @media ${device.laptop} {
      margin: 0 62px;
      width: 100%;
    }
    @media ${device.laptopL} {
      margin: auto;
      width: 100%;
    }

    display: flex;
    align-items: center;

    .menus {
      a {
        outline: none;
        ${Opacity}
      }
      margin-left: auto;
      display: flex;
      justify-content: space-between;
      span {
        margin: 0 1rem;
        font-weight: 500;
      }
      ${AvatarContainer} {
        margin: 0 0 0 1rem;
      }
    }
  }
`;
