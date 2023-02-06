import { SliderContainer } from '@atoms/Slider/style';
import device from '@styles/devices';
import styled from 'styled-components';

export const CardDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div.meta {
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    @media ${device.mobileL} {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr;
    }

    @media ${device.tablet} {
      grid-template-rows: 1fr;
      grid-template-columns: 357px auto;
    }

    grid-column-gap: 48px;
    margin-top: 2rem;
    margin-bottom: 5rem;
  }

  ${SliderContainer} {
    ul {
      grid-auto-columns: 20%;
      @media ${device.tablet} {
        grid-auto-columns: 26%;
      }
      @media (min-width: 868px) {
        grid-auto-columns: 24%;
      }
      @media (min-width: 1000px) {
        grid-auto-columns: 22%;
      }
      @media (min-width: 1131px) {
        grid-auto-columns: 20%;
      }
      @media (min-width: 1190px) {
        grid-auto-columns: 14%;
      }
    }
  }
`;
