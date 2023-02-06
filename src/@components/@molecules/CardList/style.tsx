import device from '@styles/devices';
import styled from 'styled-components';

export const CardListContainer = styled.section`
  display: grid;
  --sum-of-column-gaps: 40px;
  --container-width: calc(100% - 40px);
  --ratio: calc(var(--container-width) * var(--card-ratio));
  grid-template-columns: repeat(2, calc(var(--container-width) / 2));
  grid-template-rows: repeat(auto-fill, minmax(var(--ratio), 1fr));
  @media ${device.mobileS} {
    grid-template-columns: repeat(4, calc(var(--container-width) / 4));
    grid-template-rows: repeat(auto-fill, minmax(var(--ratio), 1fr));
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(6, calc(var(--container-width) / 6));
    grid-template-rows: repeat(auto-fill, minmax(var(--ratio), 1fr));
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(6, calc(var(--container-width) / 6));
    grid-template-rows: repeat(auto-fill, minmax(var(--ratio), 1fr));
  }

  column-gap: 8px;
  row-gap: 8px;
  height: auto;

  div {
    transition: all 0.3s ease;
    &[data-selected='true'] {
      filter: grayscale(1);
      opacity: 0.7;
      p {
        color: var(--gray-2);
      }
    }
  }
`;
