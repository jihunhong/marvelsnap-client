import device from '@styles/devices';
import styled from 'styled-components';

export const BodyContainer = styled.main`
  min-height: 100vh;
  padding-bottom: 10rem;
  > section {
    :not(.full-width) {
      max-width: 1192px;
      margin-left: auto;
      margin-right: auto;
      padding-top: var(--header-height);
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
    width: 100%;
  }
`;
