import device from '@styles/devices';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  > div {
    max-width: 1192px;
    margin-left: auto;
    margin-right: auto;
    padding: 32px 20px;
    margin: auto;
    @media ${device.mobileS} {
      margin: 0 2rem;
    }
    @media ${device.laptop} {
      margin: 0 62px;
      width: auto;
    }
    @media ${device.laptopL} {
      margin: auto;
      width: 100%;
    }
  }
`;
