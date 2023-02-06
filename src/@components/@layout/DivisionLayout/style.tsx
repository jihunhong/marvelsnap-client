import { ButtonGroupContainer } from '@atoms/ButtonGroup/style';
import device from '@styles/devices';
import styled from 'styled-components';
import { CardListContainer } from '../../@molecules/CardList/style';

export const DivisionLayoutContainer = styled.section`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column-reverse;
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas: 'card card card card card card card card offset filter filter filter';
  }

  ${ButtonGroupContainer} {
    margin-bottom: 1rem;
    margin-left: 8px;
  }

  ${CardListContainer} {
    grid-area: card;
  }

  section:has(${CardListContainer}) {
    grid-area: card;
  }

  --min-height: calc(100vh - var(--header-height));
  > section:nth-child(2) {
    position: relative;
    grid-area: filter;
    @media ${device.tablet} {
      width: 100%;
      height: auto;
      min-height: unset;
      position: relative;
      bottom: 1rem;
      height: auto;
    }

    .content {
      position: sticky;
      top: var(--header-height);
      min-height: var(--min-height);
      @media ${device.tablet} {
        position: relative;
        top: unset;
        min-height: 0px;
        height: auto;
      }
    }
  }
`;
