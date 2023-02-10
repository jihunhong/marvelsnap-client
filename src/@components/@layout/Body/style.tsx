import device from '@styles/devices';
import styled from 'styled-components';

export const BodyContainer = styled.main`
  min-width: 320px;
  padding-bottom: 2rem;
  > section {
    :not(.full-width) {
      max-width: 1192px;
      margin: 0 0.5rem;
      width: auto;
      padding-top: 2rem;
      @media ${device.mobileS} {
        margin: 0 0.5rem;
        width: auto;
        padding-top: 2rem;
      }
      @media ${device.tablet} {
        margin: 0 2rem;
        width: auto;
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
  }
`;
